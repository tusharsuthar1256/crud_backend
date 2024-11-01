import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/DBConnection.js";
import productRouter from "./Route/Product.route.js";


dotenv.config();
connectDB();

const app = express();
app.use(express.json())
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/products",productRouter);

const PORT = process.env.PORT || 8000;


app.listen(PORT,() => {
  console.log("Server is running on port: " + PORT +"");
  
})