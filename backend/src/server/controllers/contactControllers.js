import contactModel from "../models/contactModel.js";
import asyncHandler from "express-async-handler";

const contact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Enter the blank input fields" });
  }
  const msg = new contactModel({
    name,
    email,
    message,
  });
  const createdMessage = await msg.save();
  return res
    .status(201)
    .json({ message: createdMessage.message, id: createdMessage._id });
});

export default contact;
