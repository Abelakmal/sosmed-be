import express from "express";
import { register } from "../controllers/auth/register";
import { login } from "../controllers/auth/login";
import { verifyToken } from "../middleware/jwtVerifyToken";
import { getUserByUsername } from "../controllers/users/getUserByUsername";

const router = express.Router();

router.post('/register',register)
router.post('/login',login)
router.use(verifyToken)
router.get('/:username',getUserByUsername)


export default router;