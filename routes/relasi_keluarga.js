const express =require('express')
const {Relasi, Identitas, Jenis_relasi} = require('./../models')
const relasiController = require('./../controllers/relasi_keluarga');
const jenis_relasi = require('../models/jenis_relasi');
const router = express.Router()
const Op = require('Sequelize').Op;

router.get('/new/:id',async (req, res) =>{
    let method="new"
    const identitas = await Identitas.findAll({
        raw : true ,
        nest: true 
    })
    const jenis_relasi = await Jenis_relasi.findAll({
        raw : true ,
        nest: true 
    })
    res.render('relasi_keluarga/new', {id_identitas_1:req.params.id ,method:method, identitas:identitas, jenis_relasi:jenis_relasi})
})

router.get('/',async (req, res) => {
    const identitas = await Identitas.findAll({
        raw : true ,
        nest: true 
    })
    res.render('relasi_keluarga/home', {identitas:identitas})

})

router.get('/:id',async (req, res) => {
    let nama = []
    let relasi = []
    const identitas_tunggal = await Identitas.findAll({
        raw : true,
        nest: true,
        where:{
            id: req.params.id
        }
    })
    
    const identitas = await Identitas.findAll({
        raw : true,
        nest: true,
       
        include: [{
            model: Relasi, 
            as:'relasi',
            where: {id_identitas_1:req.params.id}
        }],
    })

    for (let index = 0; index < identitas.length; index++) {
        const identitas_reveal = await Identitas.findAll({
            raw : true,
            nest: true,
            where:{
                id: identitas[index].relasi.id_identitas_2
                // id:{[Op.or]: [identitas[index].relasi.id_identitas_1,identitas[index].relasi.id_identitas_2 ]}
            },
            attributes:['nama']
        })
        nama.push(identitas_reveal)

        const nama_relasi = await Jenis_relasi.findAll({
            raw : true,
            nest: true,
            where:{
                id:identitas[index].relasi.id_Jenis_relasi
            },
            attributes:['jenis_relasi']
        })
        relasi.push(nama_relasi)

    }
    res.render('relasi_keluarga/home', {identitas_tunggal:identitas_tunggal ,identitas:identitas, identitas_reveal:nama, jenis_relasi:relasi})

})

router.post('/', relasiController.add_relation)
router.get("/edit/:id", relasiController.edit);
router.put("/:id", relasiController.update);
router.delete('/delete/:id', relasiController.delete);

// router.get('/edit/:id', async (req, res) =>{
//     const article = await Article.findById(req.params.id)
//     res.render('articles/edit', {article: article})
// })

// routes.put('/api/v0/article/:articleId', article.update)

module.exports = router
