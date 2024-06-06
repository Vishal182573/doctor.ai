import express,{json}from "express";
import dbconnection from "./config/dbConnection.js";
import contact from "./routes/contactRoutes.js";
import cors from "cors";
import user from "./routes/userRoutes.js";

dbconnection();
const app = express();
const port = 3001;

app.use(json());
app.use(cors({
    origin:"http://localhost:3000",
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use("/api/contact",contact);
app.use("/api/user",user);
app.use("/",(req,res)=>{
    res.send("This is home page");
})


app.listen(port,()=>{
    console.log("Server is running properly");
})