import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://damantadi38:Daman123@cluster0.e2bli.mongodb.net/food-del').then(()=>{
       console.log('DB connected') ;
    })
}

//Daman123