import { Router } from "express";
import contact from "../controllers/contactControllers.js";
const router = Router();

router.post("/contact",contact);


export default router;