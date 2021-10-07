
const express= require("express")
const connectDb = require("./config/ConnectDb")
const userRouter = require("./Routes/auth")
const rdvRouter = require("./Routes/Rdv")
require('dotenv').config()

// const  router  = require("./Routes/user")

const app=express()

port=5000


connectDb()
app.use(express.json())

app.use('/api',userRouter)
app.use('/api/rdv',rdvRouter)


app.listen(port,()=> console.log(`server is running on port ${port}`))
