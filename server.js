const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')
const sequelize = require('./db.js')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) =>{
    res.render('index')
})

app.use('/articles', articleRouter)

app.listen(5000)