const {Identitas} = require('../models')

module.exports = {

    registerUser:(req, res) =>{
        const {nama, jenis_kelamin} = req.body
         Identitas.create({
            nama:nama,
            jenis_kelamin:jenis_kelamin
        })
        .then(resp => {
            res.redirect(`/`)
        }).catch(err => {
            res.json({
                status:403,
                message:'failed insert data ',err
            })
        })

    },

}
