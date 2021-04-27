import express from 'express';
import { signIn, signUp } from '../controllers/UsersControllers.js';



const router = express.Router();


// router.get("/", )
// router.get("/:id", )
router.post("/sign-in", signIn)
router.post("/sign-up", signUp)
// router.patch("/:id", )
// router.delete("/:id", )

export default router;
