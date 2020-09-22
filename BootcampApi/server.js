// first we import
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const auth = require("./routes/auth");
const connectDB = require("./config/db");

// load the configs
dotenv.config({ path: "./config/config.env" });

// connect to db
connectDB();

const app = express();

// ADD THIS
// var cors = require('cors');
// app.use(cors());

// body parser
app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// mount all routes
app.use("/api/v1/auth", auth);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello from express backend");
});

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
