const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/authmiddleware");
const isUserAdmin = require("../middleware/admin_middleware")


router.get("/welcome", authMiddleware ,isUserAdmin,(req,res)=>{
    res.json({message: "Welcome to the admin home page",
    status: 200})
    });
    module.exports = router;


