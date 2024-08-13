const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const router = require("./Routes/UserRoute"); // Assuming the route file path is correct
const app = express();

app.use(cors());
app.use(express.json());  // This should be before your route handling middleware

app.use("/data", router);

// MongoDB connection
const uri = "mongodb+srv://admin:aNuq6376Dyo6bRCV@cluster0.kvlta.mongodb.net/";
mongoose.connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
