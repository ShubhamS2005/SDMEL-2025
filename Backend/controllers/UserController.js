import {User} from "../models/Users.js"
import {catchAsyncErrors} from "../middleware/CatchAssyncErrors.js"
import ErrorHandler from "../middleware/errormiddleware.js"
import {generateToken} from "../utils/jwtToken.js"
import cloudinary from "cloudinary"
import nodemailer from "nodemailer"
import { sendVerifymail } from "../utils/emailService.js"

export const UserRegister=catchAsyncErrors(async(req,res,next)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("User Avatar Required!", 400));
      }
    const { userAvatar } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(userAvatar.mimetype)) {
        return next(new ErrorHandler("File Format Not Supported!", 400));
    }
    const cloudinaryResponse = await cloudinary.uploader.upload(
        userAvatar.tempFilePath
      );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
          "Cloudinary Error:",
          cloudinaryResponse.error || "Unknown Cloudinary error"
        );
        return next(
          new ErrorHandler("Failed To Upload User Avatar To Cloudinary", 500)
        );
    }
    

    const{firstname,lastname,email,phone,password,role}=req.body
    if(!firstname||!lastname||!email||!phone||!password||!role){
        return next(new ErrorHandler("Please fill full form",400));
    }
    const user=await User.findOne({email})
    if(user){
        return next(new ErrorHandler("User Already registered",400));
    }
    else{
        const userData=await User.create({
            firstname,lastname,email,phone,password,role,
            userAvatar: {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url,
              },
        })
        // generateToken(user,"user registered",200,res)
        sendVerifymail(firstname,lastname,email,userData._id)
        res.status(200).json({
            success:true,
            message:"User Registered,Verify your mail"
        })
    }
})

export const login=catchAsyncErrors(async(req,res,next)=>{
  const{email,password,role}=req.body;
  if(!email||!password||!role){
      return next(new ErrorHandler("Please Provide all details",400));
  }
  const user=await User.findOne({email}).select("+password")
  if(!user){
      return next(new ErrorHandler("Invalid Email or password",400));
  }
  const isPasswordMatched=await user.comparePassword(password);
  if(!isPasswordMatched){
      return next(new ErrorHandler("Invalid Email or password",400));
  }
  
  if(role!==user.role){
      return next(new ErrorHandler("User with this role not found",400));
  }

  if(user.isVerified===0){
      return next(new ErrorHandler("User is not verifyied please click on link send to you"));
  }
  generateToken(user,"User Logged in Successfully",200,res)
})


export const GetUser=catchAsyncErrors(async(req,res,next)=>{
  const user=req.user
  res.status(200).json({
      success:true,
      user
  })

})

export const AdminLogout=catchAsyncErrors(async(req,res,next)=>{
  res.status(200).cookie("adminToken","",{
      httpOnly:true,
      expires:new Date(Date.now()),
      
  }).json({
      success:true,
      message:"Admin Log out succesfully"
  })
})

export const AuthorLogout=catchAsyncErrors(async(req,res,next)=>{
  res.status(200).cookie("authorToken","",{
      httpOnly:true,
      expires:new Date(Date.now()),
      
  }).json({
      success:true,
      message:"Author Log out succesfully"
  })
})

export const SpnsorLogout=catchAsyncErrors(async(req,res,next)=>{
  res.status(200).cookie("sponsorToken","",{
      httpOnly:true,
      expires:new Date(Date.now())
  }).json({
      success:true,
      message:"Sponsor Log out succesfully"
  })
})
