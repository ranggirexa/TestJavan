const express = require("express")
const methodOverride = require('method-override')
const identitasRouter = require('./routes/identitas')
const jenis_relasiRouter = require('./routes/jenis_relasi')
const relasi_keluargaRouter = require('./routes/relasi_keluarga')
const asetRouter = require('./routes/aset')
const kepemilikan_asetRouter = require('./routes/kepemilikan_aset')
const {Relasi, Identitas, Jenis_relasi} = require('./models')

const port = process.env.PORT || 5000
const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/',async (req, res) => {
    const identitas = await Identitas.findAll({
        raw : true ,
        nest: true 
    })
    res.render('home', {identitas:identitas})

})


app.use('/identitas',identitasRouter)
app.use('/jenis_relasi',jenis_relasiRouter)
app.use('/relasi_keluarga',relasi_keluargaRouter)
app.use('/aset',asetRouter)
app.use('/kepemilikan_aset',kepemilikan_asetRouter)

app.listen(port, () =>{
    console.log(`server running at port ${port}`);
})