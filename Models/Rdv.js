const mongoose=require("mongoose")


const Rdv = new mongoose.Schema ({


name:{type:String},
email:{type:String},
age:{type:Number},
adresse:{type:String},
phone_number:{type:Number},
date:{type:String},
message:{type:String},
userId:{type:mongoose.Schema.Types.ObjectId,  ref:"User"},
doc_id:{type:String, required:true}
})


module.exports = mongoose.model('Rdv',Rdv)