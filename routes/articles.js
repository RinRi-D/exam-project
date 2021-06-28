const express = require('express')
const router = express.Router()
const {sequelize, Posts} = require("../db.js")

router.get('/', async (req, res) => {
    const articles = await Posts.findAll()

    

    page = 1
    if(req.query.page != undefined)
        page = req.query.page
    
    console.log(articles)
    res.render("articles", { articles: articles, page: page, col: 2 })
})

router.get('/new', (req, res) => {
    res.render("new")
})

router.post('/', async (req, res) => {
    try {
        const newPost = new Posts(req.body)
        await newPost.save()
        res.redirect("/articles")
    } catch(error) {
        console.error(error)     
    }
})

module.exports = router