const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express()
const eventRouter = require('./router/eventRouter')


require('dotenv').config()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())
app.use('/uploads',express.static('uploads'))

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connected")).catch((err) => console.log(err))

app.use('/event',eventRouter)

app.listen(process.env.PORT, ()=>{
    console.log("app running");
});