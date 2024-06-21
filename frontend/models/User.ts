import { Schema, model, models, Document } from "mongoose";

interface IUser extends Document {
  fullName: string,
  dob:string,
  gender:string,
  contact:string,
  email:string,
  userName:string,
  password:string,
  primaryPhysicianName: string,
  medicalHistorySummary: string,
  symptomsDescription: string,
}

const userSchema = new Schema<IUser>({
    fullName: { type: String, required: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true},
    userName: { type: String, required: true },
    password: { type: String, required: true },
    primaryPhysicianName: { type: String, required: false },
    medicalHistorySummary: { type: String, required: false },
    symptomsDescription: { type: String, required: false },
}, { timestamps: true });

const User = models.User || model<IUser>("User", userSchema);
export default User;
