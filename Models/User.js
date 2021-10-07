const mongoose=require("mongoose")


const User = new mongoose.Schema ({


name:{type:String,required:true},
email:{type:String,required:true},
password:{type:String,required:true},
 age:{type:Number},
 speciality:{type:String},
 adresse:{type:String},
 phone_number:{type:Number},
 role:{  type:String, required:true , enum:['professionnel','patient']   },
 Rdv:[{  type:mongoose.Schema.Types.ObjectId, ref:'Rdv'  }]
})


module.exports = mongoose.model('User',User)