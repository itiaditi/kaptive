const express = require("express");
const app= express();
const cors = require("cors");
const { connectToDb } = require("./connectToDb/connection");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);

app.listen(PORT,async()=>{
    await connectToDb();
    console.log(`server is running at ${PORT}`);
})