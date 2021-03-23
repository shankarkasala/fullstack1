
const express = require('express')
const router = express.Router()
const signuptempcopy = require('../models/signupmodel')
const bcrypt = require('bcrypt')
router.post('/signup',async(request,response)=>{
    const saltPassword= await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password,saltPassword)
    const signedupuser = new signuptempcopy({
        fullname:request.body.fullname,
        username:request.body.username,
        email:request.body.email,
        password:securePassword

    })
    signedupuser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(Error)
    })
})

module.exports=router