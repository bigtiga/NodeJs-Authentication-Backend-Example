const isUserAdmin = (req,res,next)=>{
    if(req.userInfo && req.userInfo.role === 'admin'){
        next();
    }else{
        res.status(403).send({message:'You are not authorized to access this resource'});
    }

}
module.exports = isUserAdmin;