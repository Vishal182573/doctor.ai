import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

// Helper function to validate required fields

const validateRegisterUser = (body) => {
  const {
    fullName,
    dateOfBirth,
    gender,
    contactNumber,
    email,
    username,
    password,
    confirmPassword,
  } = body;

  if (!fullName) return { status: 400, message: "Full name is required" };
  if (!dateOfBirth)
    return { status: 400, message: "Date of birth is required" };
  if (!gender) return { status: 400, message: "Gender is required" };
  if (!contactNumber)
    return { status: 400, message: "Contact number is required" };
  if (!email) return { status: 400, message: "Email is required" };
  if (!username) return { status: 400, message: "Username is required" };
  if (!password) return { status: 400, message: "Password is required" };
  if (!confirmPassword)
    return { status: 400, message: "Confirm password is required" };
  if (password !== confirmPassword)
    return { status: 400, message: "Passwords do not match" };

  return null; // All validations passed
};

// Register User
const RegisterUser = asyncHandler(async (req, res) => {
  const validationError = validateRegisterUser(req.body);
  if (validationError) {
    return res
      .status(validationError.status)
      .json({ message: validationError.message });
  }

  const {
    fullName,
    dateOfBirth,
    gender,
    contactNumber,
    email,
    username,
    password,
    primaryPhysicianName,
    medicalHistorySummary,
    symptomsDescription,
  } = req.body;

  try {
    const userExists = await User.findOne({
      $or: [{ email }, { userName: username }],
    });
    if (userExists) {
      console.log(
        "User already exists with email or username:",
        email,
        username
      );
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Password hashed successfully");

    const user = new User({
      fullName,
      dob: dateOfBirth,
      gender,
      contact: contactNumber,
      email,
      userName: username,
      password: hashedPassword,
      primaryPhysicianName,
      medicalHistorySummary,
      symptomsDescription,
    });

    const registeredUser = await user.save();
    console.log("User registered successfully with ID:", registeredUser._id);
    return res.status(201).json({
      userId: registeredUser._id,
      message: "User registered successfully",
    });
  } catch (err) {
    console.error("Error during user registration:", err);
    return res.status(500).json({ message: "Failed to register user" });
  }
});

// Login User
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res.status(201).json({ message: "Login successful" });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to process request" });
  }
});

const getUserByEmail = asyncHandler(async(req,res)=>{
  try{
    const {email}= req.query;
    if(!email) return res.status(400).json({message:"Email is Required"});

    const user = await User.findOne({email});

    if(!user){
      return res.status(404).json({message: "User not found"});
    }

    return res.status(201).json(user);

  }catch(err){
    return res.status(500).json({message:"Internal Server Error"});
  }
})

export { 
  LoginUser,
  RegisterUser,
  getUserByEmail };
