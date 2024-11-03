//register controller 
//login controller

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const registerUser = async (req,res)=>{
    try{
        const {username,email,password,role} = req.body;
        //check if user already in database
        const existingUser = await User.findOne({$or:[{username},{email}]});
        if(existingUser){
            return res.status(400).json({message:`User already exists with that ${email} or ${username}..Please try with a different credential`
            ,success:false
            });
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        //create new user and save in database
        const new_user = new User({
            username,
            email,
            password:hashedPassword,
            role : role || "user"
        })
        await new_user.save();
        if(new_user){
            return res.status(201).json({message:`User created successfully`,success:true});
        }else{
            return res.status(400).json({message:`Failed to create user.Try again`,success:false});
        }





    }catch(err){
        console.log(err)
        res.status(500).json({message:"Some error occured..Please try again",
            success:false})
    }

}
const loginUser = async (req,res)=>{

    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message:`User not found`,success:false});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:`Invalid password`,success:false});
        }
        //bearer token
        const tokenAccess = jwt.sign({
            userId : user._id,
            username : user.username,
            role : user.role


        },process.env.SECRETJWT_KEY,{
            expiresIn : "10m"
        })
        res.status(200).json({message:`Logged in successfully`,success:true,token:tokenAccess})





    }catch(err){
        console.log(err)
        res.status(500).json({message:"Some error occured..Please try again",
            success:false})
    }

}
module.exports = {registerUser,loginUser}