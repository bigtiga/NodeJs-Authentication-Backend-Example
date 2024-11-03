const jwt = require("jsonwebtoken")
const authMiddleware = (req,res,next)=>{
 const headerauth = req.headers["authorization"]
 console.log(headerauth);
 const token = headerauth && headerauth.split(" ")[1];

 if(!token){
    return res.status(401).json({message:"Please login first",success:false})

 }
 try{
    const decodedToken= jwt.verify(token,process.env.SECRETJWT_KEY);
    req.userInfo = decodedToken;
    console.log(decodedToken);
    next();

 }catch(err){
    return res.status(500).json({message:"Please login first",success:false})


 }


 next();
}
module.exports = authMiddleware;