const express =require('express')
const {Aset} = require('./../models')
const kepemilikan_asetController = require('../controllers/kepemilikan_aset')
const router = express.Router()

router.get('/new/:identitas_id',async(req, res) =>{
    const aset = await Aset.findAll({
        raw : true ,
        nest: true 
    })
    res.render('kepemilikan_aset/new',{aset:aset, id_identitas:req.params.identitas_id})
})

router.post('/', kepemilikan_asetController.add_aset)


module.exports = router
