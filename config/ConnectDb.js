const mongoose=require("mongoose")

const connectDb=  async ()=> {
    try {
     await   mongoose.connect('mongodb+srv://molk:1234@cluster0.ajruf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')  
    console.log('bd is connected')
    } catch (error) {
        console.log({msg:'db is ot connected',error})
    }
}
module.exports=connectDb