const {Relasi, Identitas, Jenis_relasi} = require('../models')

module.exports = {

    add_relation:async (req, res) =>{
        const body = req.body

        console.log("aaa ",req.body);
        value = []
        for (var key in body) {
            if (body.hasOwnProperty(key)) {
            //   console.log(key, body[key])
              value.push(body[key])
            }
        }
        console.log(value);          
        await Relasi.create({
            id_identitas_1:value[0],
            id_Jenis_relasi:value[1],
            id_identitas_2:value[2]
        })
        .then(resp => {
            res.redirect(`/relasi_keluarga/${value[0]}`)
        }).catch(err => {
            res.json({
                status:403,
                message:'failed insert data ',err
            })
        })

    },

    edit:async(req, res) =>{
        const method = "edit"
        const identitas = await Identitas.findAll({
            raw : true ,
            nest: true 
        })
        const jenis_relasi = await Jenis_relasi.findAll({
            raw : true ,
            nest: true 
        })
        Relasi.findOne({
            raw:true,
            nest:true,
            where:{
                id:req.params.id
            }
        })
        .then((resp) => {
            res.render('relasi_keluarga/edit', {method:method , relasi: resp, identitas:identitas, jenis_relasi:jenis_relasi})
        }).catch((err) => {
            res.status(500)
            res.json({
                message:err.message
            })
        })

    },

    update: async (req, res) => {
        Relasi.update(
            {
                id_Jenis_relasi : req.body.jenis_relasi,
            },
            {
            where: {
                id: req.params.id
            },
            }
        )
        .then(function (resp) {
            res.redirect(`/relasi_keluarga/${req.body.identitas}`)
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    delete: async (req, res) => {
        Relasi.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(resp => {
            // res.redirect(`relasi_keluarga/${req.body.id_relasi}`)
            res.redirect('back');
        })
        .catch(err => {
            res.status(500)
            res.json({
                message:err.message
            })
        })
    
    }



}
