import contactModel from "../models/contactModel.js"
import asyncHandler from "express-async-handler"

const contact = asyncHandler(async(req,res)=>{
    const {name,email,message} = req.body;
    if(!name || !email || !message){
        return res
        .status(400)
        .json({message:"Enter the blank input fields"})
    }
    const mssg = new contactModel({
        name,
        email,
        message,
    });
    const createdMessage = await mssg.save();
    return res.status(201).json(createdMessage.message);
})

export default contact;