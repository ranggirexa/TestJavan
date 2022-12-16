const {Kepemilikan_aset} = require('../models')

module.exports = {

    add_aset:async(req, res) =>{
        const body = req.body
        console.log(req.body);
        value = []
        for (var key in body) {
            if (body.hasOwnProperty(key)) {
              value.push(body[key])
            }
        }
        console.log(value);          
        await Kepemilikan_aset.create({
            id_identitas:value[0],
            id_aset:value[1],
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

}
