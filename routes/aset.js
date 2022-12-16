const express =require('express')
const asetController = require('../controllers/aset')
const router = express.Router()

router.get('/new/:id',(req, res) =>{
    const id_identitas = req.params.id
    res.render('aset/new',{id_identitas:id_identitas})
})

router.post('/', asetController.add_aset)


module.exports = router
