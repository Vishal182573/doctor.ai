import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    primaryPhysicianName: { type: String, required: true },
    medicalHistorySummary: { type: String, required: true },
    symptomsDescription: { type: String, required: true },
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;
