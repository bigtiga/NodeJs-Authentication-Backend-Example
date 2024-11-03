require("dotenv").config();
const express = require("express");

const connectDB = require("./database/d_base");
const eachroute = require("./routes/authroutes");
const home_route = require("./routes/homeroute");
const adminroute = require("./routes/adminhome")



connectDB();

const app = express();
exports.app = app;
const PORT = 3000;

const mongo = process.env.MONGO_DB_URL;

//middleware
app.use(express.json());

app.get("/api/", (req, res) => {
  res.send("API is working!");
});

app.use("/api/", eachroute);
app.use("/api/home", home_route);
app.use("/api/admin", adminroute);
const HOST = process.env.HOST;

const { exec } = require("child_process");

app
  .listen(PORT, HOST, () => {
    console.log(`Server is running and listening on port ${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use. Attempting to free it...`);

      // Run a command to find and kill the process using the port
      exec(`lsof -ti :${PORT} | xargs kill -9`, (killErr, stdout, stderr) => {
        if (killErr) {
          console.error(`Failed to free port ${PORT}:`, killErr.message);
        } else {
          console.log(
            `Port ${PORT} has been freed. Please restart the server.`
          );
        }
      });
    } else {
      console.error("Server error:", err);
    }
  });

console.log(`Host: ${HOST}`); // Should print "Host: 0.0.0.0" if set correctly in the .env file
app.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});
