const express =require('express')
const {Identitas} = require('./../models')
const identitasController = require('./../controllers/identitas')
const router = express.Router()

router.get('/new',(req, res) =>{
    res.render('identitas/new')
})

router.get('/identitas',async (req, res) =>{
    // const name = saveArticleAndRedirect
    // res.render('identitas/identitas',{
    //     name:name
    // })
    const identitas = await Identitas.findAll({
        raw : true ,
        nest: true 
    })
    console.log(identitas);
    res.render('identitas/identitas', {identitas:identitas})
})

router.post('/', identitasController.registerUser)

module.exports = router
