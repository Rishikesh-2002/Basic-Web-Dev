const express = require("express")
const router = express.Router()

//Define the home page route
router.get('/',(req,res)=>{
    res.send('Shop Home Page')
})

//Define the about route
router.get('/about',(req,res)=>{
    res.send('About Shop')
})

module.exports = router