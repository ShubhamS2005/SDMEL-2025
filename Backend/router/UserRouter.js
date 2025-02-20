import express from "express"
import { login, UserRegister } from "../controllers/UserController.js"

const user_router=express.Router()

// common use
user_router.post("/register",UserRegister)
user_router.post("/login",login)


export default user_router