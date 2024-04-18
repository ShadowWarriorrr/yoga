import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import cors from "cors";


const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get("/", (req, res) => {
  res.json({message : "Hello! I am Backend!"});
  console.log("Hello from backend");
});

app.use("/auth", authRoute);

const connect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://saiharsha:Harsha@cluster0.g7yq6gz.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB.")
      } catch (error) {
        console.log("Error connecting to MongoDB");
        console.log(error);
      }

};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected!")
})

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB connected!")
})

app.listen(8800, () => {
    connect();
  console.log("Server started on port 8800");
})