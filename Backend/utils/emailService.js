import nodemailer from "nodemailer"
import {catchAsyncErrors} from "../middleware/CatchAssyncErrors.js"
import ErrorHandler from "../middleware/errormiddleware.js"

export const sendVerifymail=async(firstname,lastname,email,user_id)=>{
    try {
        const transpoter=nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:465,
            requireTLS:true,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.PASSWORD_USER
            }
        });
        const mailoptions={
            from:process.env.EMAIL_USER,
            to:email,
            subject:'Verification of SDMEL-2025',
            html:`<p>Hii ${firstname} ${lastname} ,this email is send to you by Haridwar University to inform you that your account is created for SDMEL-2025 please verify your account by click here <a href="http://127.0.0.1:${process.env.PORT}/verify?id=${user_id}">Verify</a> </p>`
        }

        transpoter.sendMail(mailoptions,function(error,info){
            if(error){
                console.log(error);
            }
            else{
                console.log("Email has been sent:- ",info.response);
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}
