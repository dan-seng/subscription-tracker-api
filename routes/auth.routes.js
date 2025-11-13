import { Router } from "express";
import { signIn, signUp, signOut } from "../controllers/auth.contoller.js";
const route = Router();


///api/v1/auth/sign-in
route.post('/sign-in', signIn);
route.post('/sign-up', signUp);
route.post('/sign-out', signOut);

export default route;