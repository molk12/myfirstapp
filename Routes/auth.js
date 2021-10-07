const express=require("express")
const User = require("../Models/User")
const router = express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { RegisterValidation, Validation,LoginValidation } = require("../Middlewares/Validation")
const { isAuth } = require("../Middlewares/isAuth")


//Sign Up////inscription :
//method : post
//req.body

router.post('/SignUp',RegisterValidation,Validation,async (req,res)=>{
    const {name,email,password,age}=req.body
    try {
       const founduser= await User.findOne({email})
       if (founduser)   {return res.status(400).send({errors:[{msg:"user already exists"}]})}
       const user= User(req.body)

//hachage du password:
const salt=10
const hashedpassword=bcrypt.hashSync(password,salt)
user.password=hashedpassword


const payload={id:user._id}
const token=jwt.sign(payload,process.env.SecretOrKey)

    await   user.save()
       res.status(200).send({msg:'register with success',user,token})
     

    } catch (error) {
        res.status(500).send({errors:[{msg:'could not register'}]})
    }
})


//Sign In///connexion
//post
//req.body
router.post('/SignIn',LoginValidation,Validation,async (req,res)=>{
    const {email,password}=req.body
    try {
    // found email to compare
      const foundemail=await  User. findOne({email}) 
      if(! foundemail) {return res.status(400).send({errors:[{msg:"bad credentials"}]})}
      const match= await bcrypt.compare(password,foundemail.password)
      if (!match) {return res.status(400).send({errors:[{msg:"bad credentials"}]})}
   
   //token
   const payload={id:foundemail._id}
   const token=jwt.sign(payload,process.env.SecretOrKey)
   res.status(200).send({msg:'login with sucess',foundemail,token})
    } catch (error) {
      res.status(500).send({errors:[{msg:"could not login"}]})  
    }
})
//get: with token read the user
//current 
//req.headers

router.get('/current',isAuth, (req,res)=>res.send({user:req.user}))


router.get('/doctors', async (req,res)=> {

    try {
        const user= await User.find()
        console.log(user)
       const doctors= user.filter(el=>  el.role=='professionnel')
        res.status(200).send({msg:'list of doctors', doctors})
    } catch (error) {
        res.status(500).send({errors:[{msg:"could not get doctors"}]})  

    }
} )

module.exports=router