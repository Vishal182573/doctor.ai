import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"; // Ensure you have bcrypt installed


// Helper function to validate required fields
const validateRegisterUser = (body) => {
    const {
        fullName,
        dob,
        gender,
        contact,
        email,
        userName,
        password,
        confirmPassword,
        primaryPhysicianName,
        medicalHistorySummary,
        symptomsDescription,
    } = body;
    console.log(body);
    if (!fullName) return "Full name is required";
    if (!dob) return "Date of birth is required";
    if (!gender) return "Gender is required";
    if (!contact) return "Contact number is required";
    if (!email) return "Email is required";
    if (!userName) return "Username is required";
    if (!password) return "Password is required";
    if (!confirmPassword) return "Confirm password is required";
    if (password !== confirmPassword) return "Passwords do not match";
    if (!primaryPhysicianName) return "Primary physician name is required";
    if (!medicalHistorySummary) return "Medical history summary is required";
    if (!symptomsDescription) return "Symptoms description is required";

    return null; // All validations passed
};

// Register User
const RegisterUser = asyncHandler(async (req, res) => {
    const validationError = validateRegisterUser(req.body);
console.log(req.body);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }
    const {
        fullName,
        dob,
        gender,
        contact,
        email,
        userName,
        password,
        primaryPhysicianName,
        medicalHistorySummary,
        symptomsDescription,
    } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully");

        const user = new User({
            fullName,
            dob,
            gender,
            contact,
            email,
            userName,
            password: hashedPassword,
            primaryPhysicianName,
            medicalHistorySummary,
            symptomsDescription,
        });

        const registeredUser = await user.save();
        console.log("User registered successfully with ID:", registeredUser._id);
        return res.status(201).json({ userId: registeredUser._id });
    } catch (err) {
        console.error('Error during user registration:', err);
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
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Failed to process request" });
    }
});

export {
    LoginUser,
    RegisterUser,
};
