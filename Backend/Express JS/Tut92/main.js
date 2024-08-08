const express = require('express')
const app = express()
const port = 3000

app.set("view engine" , 'ejs')

app.get('/', (req, res) => {
    let sitename = "Adidas"
    let searchtext = "Search Now"
    let arr = ["Hey","Hello","Hi"]
    res.render("index",{sitename,searchtext,arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogtitle = "My Blog"
    let blogtext = "It is a very good blog"
    res.render("blog",{blogtitle,blogtext})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})