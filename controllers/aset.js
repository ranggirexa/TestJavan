const {Aset} = require('../models')

module.exports = {

    add_aset:(req, res) =>{
        const {nama_aset} = req.body
        Aset.create({
            nama_aset:nama_aset,
        })
        .then(resp => {
            res.redirect(`/kepemilikan_aset/new/${req.body.identitas}`)
        }).catch(err => {
            res.json({
                status:403,
                message:'failed insert data ',err
            })
        })

    },

}
