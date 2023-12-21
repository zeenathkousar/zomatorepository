const dotenv=require('dotenv').config();

const mongoose=require('mongoose');

const connectdb=async()=>{
    console.log(process.env.MONGO_URI)
    try{
        await mongoose.connect('mongodb+srv://zomatoedureka:zomatoedureka@cluster0.xlrs6ke.mongodb.net/?retryWrites=true&w=majority',{
            dbName:"zomatoedureka",
        })
        console.log("Connected to MongoDB")
    }
    catch(err){
        throw new Error(err.message)
    }
}
module.exports=connectdb
