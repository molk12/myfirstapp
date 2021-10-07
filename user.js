// const express=require("express")
// const User = require("../Models/User")

// const router =express.Router()


// //method:post
// //req.body

// router.post('/',  async (req,res)=>{

// const{name,email}=req.body
//     try {
//      const Adduser = new User(req.body)  
//    await  Adduser.save() 
// res.status(200).send({msg:'user added',Adduser})
//     } catch (error) {

//         res.status(500).send({msg:'could not add user'})
        
//     }
// })

// //Get(read all)

// router.get('/', async    (req,res)=> {
//     try {
//       const   Users= await User.find()
//       res.status(200).send({msg:"list of users",Users})
//     } catch (error) {
//         res.status(500).send({msg:"could not find users"})
//     }

// })

// //Delete
// //req.params

// router.delete('/:ID',async (req,res)=>{
// const    {ID}=req.params
//     try {
//       const deleteuser= await User.findByIdAndDelete(ID) 
//       res.status(200).send({msg:'user deleted'}) 
//     } catch (error) {
//         res.status(500).send({msg:'could not delete user'})
        
//     }
// })


// //put//update
// //req.body
// //req.params

// router.put('/:ID',async(req,res)=>{
//     const {ID}=req.params
//     try {
//        const updateduser = await User.findByIdAndUpdate(ID,{$set:{...req.body}})
//        res.status(200).send({msg:'user updated',updateduser
//     })
//     } catch (error) {
//         res.status(500).send({msg:'could not update user'})
        
//     }
// })

// ////method get(read specific )
// ////req.params

// router.get('/:ID',async(req,res)=> {
//     const {ID}=req.params
//     try {
//         const user=  await User.findById(ID)
//         res.status(200).send({msg:'this is user', user})
//     } catch (error) {
//         res.status(500).send({msg:'we could not found user'})
//     }
// })


// module.exports=router





{/* <div className="sign-up-htm">
<div className="group">
<input type="submit" className="button" value="Vous êtes professionnel de santé !"/>
<h1> OU  BIEN !!</h1>
    <label for="user" className="label">Username</label>
    <input id="user" type="text" className="input" value={regname} onChange={(e)=>setregname(e.target.value)}/>
</div>
<div className="group">
    <label for="pass" className="label">Password</label>
    <input id="pass" type="password" className="input" data-type="password"   value={regpassword} onChange={(e)=>setregpassword(e.target.value)}/>
</div>
{/* <div className="group">
    <label for="pass" className="label">Repeat Password</label>
    <input id="pass" type="password" className="input" data-type="password"/>
</div> */}
{/* <div className="group">
    <label for="pass" className="label">Email Address</label>
    <input id="pass" type="text" className="input" value={regemail} onChange={(e)=>setregemail(e.target.value)}/>
</div>
<div className="group">
    <input   type="submit"  className="button" value="Sign Up" onClick={()=>dispatch(register({name:regname,password:regpassword,email:regemail}))}/>
</div>
<div className="hr"></div>
<div className="foot-lnk">
    <label for="tab-1">Already Member? </label>
    
</div>
</div> */} 