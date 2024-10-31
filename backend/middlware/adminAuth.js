
import jwt from "jsonwebtoken";

const adminAuth =async (req, res ,next) => {

try{
const {token} = req.headers;


if(!token){
    return res.json({success:false ,message:"1not Authorized Login again "}); 
}
const decoded_token =jwt.verify(token,process.env.JWT_SECRET)

if(decoded_token.id !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD ){
    return res.json({success:false , message:"2not Authorized Login again "}); 
}

next()
}catch(error){
    return res.json({success:false , message:error.message});
}}


export default adminAuth
