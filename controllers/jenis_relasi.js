const {Jenis_relasi} = require('../models')

module.exports = {

    add_relation:(req, res) =>{
        const {jenis_relasi} = req.body
        Jenis_relasi.create({
            jenis_relasi:jenis_relasi,
        })
        .then(resp => {
            res.redirect(`/relasi_keluarga/new`)
        }).catch(err => {
            res.json({
                status:403,
                message:'failed insert data ',err
            })
        })

    },

}
