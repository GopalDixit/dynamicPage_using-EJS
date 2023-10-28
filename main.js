const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname,'public')
app.set('view engine','ejs')

// app.use(express.static(publicPath))
app.get('',function(req,resp){
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/profile',function(req,resp){
    const user={
        name :"Gopal",
        lastname :"Dixit",
        email:"gopal@example.com"
    }
    resp.render('profile',{user});
})
app.listen(5600)