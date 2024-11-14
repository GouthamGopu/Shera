import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
dotenv.config({});

const app = express();

app.get("/",(_,res)=>{
  return res.status(200).json({
    message:"I'm coming from backend",
    success: true
  })
})


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOptions = {
  origin:'http://localhost:5173',
  credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user",userRoute);

app.listen(PORT,()=>{
  connectDB();
  console.log(`server listening at port ${PORT}`);
});