const express =require('express')
const identitasController = require('../controllers/identitas')
const jenis_relasiController = require('../controllers/jenis_relasi')
const router = express.Router()

router.get('/new',(req, res) =>{
    res.render('jenis_relasi/new')
})

router.post('/', jenis_relasiController.add_relation)


module.exports = router
