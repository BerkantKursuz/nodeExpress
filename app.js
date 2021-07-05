const express = require('express')
const app = express()
const morgan = require('morgan')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.listen(3000)

//middleware

app.use(morgan('tiny'))

//Routes
app.get('/',(req,res)=>{
    res.render('index',{title:'Anasayfa'})
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'Hakkımızda'})
    //console.log('deneme')
})

app.use((req,res)=>{
    res.status(404).render('404',{title:'Sayfa Yok'})
})