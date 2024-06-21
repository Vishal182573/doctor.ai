import { Router } from "express";
import contact from "../controllers/contactControllers.js";
const router = Router();

router.post("/message", contact);

export default router;
