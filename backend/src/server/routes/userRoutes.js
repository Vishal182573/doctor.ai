import { Router } from "express";
import 
{   LoginUser,
    RegisterUser,
    getUserByEmail 
} from "../controllers/userControllers.js";

const router = Router();

router.post("/login", LoginUser);
router.post("/register", RegisterUser);

router.get("/getUserByEmail",getUserByEmail);

export default router;
