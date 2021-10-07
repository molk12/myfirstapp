const express=require("express")
const   Rdv = require("../Models/Rdv")
const router=express.Router()
const {isAuth}=require('../Middlewares/isAuth')
const User = require("../Models/User")
//post RDV //

router.post('/Rdv',isAuth, async (req,res)=>{
    const {name,email,date,doc_id}=req.body
    
    try {
      const founddate=  await Rdv.findOne({date})  
      if (founddate) {
          return res.status(400).send({msg:"please change the date"})
      }
        const user=await User.findById(req.user._id)
 const AddRdv= new Rdv({...req.body, userId:user.id})
    await    AddRdv.save()
    user.Rdv=[...user.Rdv, AddRdv]
    await user.save()
        res.status(200).send({msg:"Rdv added ",AddRdv,user})
    } catch (error) {
        res.status(500).send({msg:"could not add Rdv"})
        
    }
})


// get my rdv
router.get('/myRdv',isAuth, async(req,res)=>{
    try {
        const rvd= await Rdv.find({userId: req.user._id}).populate("userId")
res.send(rvd)
    } catch (error) {
        console.log(error)
    }
} )
//get all RDVS //

router.get('/getRdv', async    (req,res)=> {
        try {
         const   Rdvs= await Rdv.find()
           res.status(200).send({msg:"list of Rdvs",Rdvs})
        } catch (error) {
             res.status(500).send({msg:"could not find Rdvs"})
     }
    
 })


 ////Delete Rdv

 router.delete('/:ID',async (req,res)=>{
 const    {ID}=req.params
    try {
      const deleteRdv= await Rdv.findByIdAndDelete(ID) 
     res.status(200).send({msg:'Rd deleted'}) 
    } catch (error) {
        res.status(500).send({msg:'could not delete Rdv'})
        
     }
 })

 //Update Rdv :
  
router.put('/:ID',async(req,res)=>{
     const {ID}=req.params
     console.log(ID)
    try {
       const updateRdv = await Rdv.findByIdAndUpdate(ID,{$set:{...req.body}})
     res.status(200).send({msg:'user updated',updateRdv})
     } catch (error) {
        res.status(500).send({msg:'could not update Rdv'})
        
     }
 })


 // get(one )

 router.get('/:ID',async(req,res)=> {
     
     const {ID}=req.params
     
     try {
        const rdv=  await Rdv.findById(ID)
         res.status(200).send({msg:'this is Rdv', rdv})
     } catch (error) {
         res.status(500).send({msg:' could not found Rdv'})
    }
})


module.exports=router


