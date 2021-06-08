const express = require("express");
const sequelize = require("sequelize");

// Database
const db = require("./config/database");

// Routes
const authRoutes = require("./routes/authRoutes");
const gejalaRoutes = require("./routes/gejalaRoutes");
const penyakitRoutes = require("./routes/penyakitRoutes");
const historyRoutes = require("./routes/historyRoutes");

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: ", err));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// Routes middlewares
app.use("/api/users", authRoutes);
app.use("/api/gejala", gejalaRoutes);
app.use("/api/penyakit", penyakitRoutes);
app.use("/api/history", historyRoutes);

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unkown error occured!!" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
