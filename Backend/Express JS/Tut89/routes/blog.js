const express = require("express")
const router = express.Router()

//Define the home page route
router.get('/',(req,res)=>{
    res.send('Blog Home Page')
})

//Define the about route
router.get('/about',(req,res)=>{
    res.send('About Blog')
})

//Define the blogpost route
router.get('/blogpost/:slug',(req,res)=>{
    res.send(`Fetch the blogpost for ${req.params.slug}`)
})

module.exports = router