import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import { errormiddleware } from "./middleware/errormiddleware.js";
import user_router from "./router/UserRouter.js";
import {User} from "./models/Users.js";


const app = express();

config({ path: "./config/config.env" });

const port = process.env.PORT || 5000;
const uri = process.env.DATABASE_URI;

// Middleware setup
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/verify", async (req, res) => {
    const updateInfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { isVerified: 1 } }
    );
  
    console.log(updateInfo);
    res.redirect(`${process.env.FRONTEND_URL}`);
  });
  

// App routes
app.use("/api/v1/user", user_router);
// app.use("/api/v1/appointment", appointment_router);


// Database connection
try {
    mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
  


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  


// Start the server
app.listen(port, () => {
    console.log(`Backend running at port ${port}`);
  });
  
// Middleware for error handling
app.use(errormiddleware);