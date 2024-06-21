import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    userName: { type: String, required: true},
    password: { type: String, required: true },
    primaryPhysicianName: { type: String, required: false },
    medicalHistorySummary: { type: String, required: false },
    symptomsDescription: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
