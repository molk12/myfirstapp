const jwt=require("jsonwebtoken")
const User = require("../Models/User")

exports.isAuth= async (req,res,next)=> {
    
 
    const token =req.header('Authorization')

try {
    if (! token){return res.status(400).send('not authorized')}
    const decoded=jwt.verify(token,process.env.SecretOrKey)
const user= await User.findById(decoded.id)
req.user=user
next()

} catch (error) {
 res.status(500).send('server error')   
}
}