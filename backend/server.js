const dotenv = require("dotenv"); 
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const recommendationRoutes = require("./routes/recommendationRoutes");
app.use("/api", recommendationRoutes);

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
