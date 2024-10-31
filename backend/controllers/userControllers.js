import userModel from "../models/userModel.js";
import validator from "validator"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// jwt functionality
const createToken =(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET)
}


// userSignIn
const userSignIn = async (req ,res)=>{

 try{  
     const {email , password} = req.body;
// check valid email
if(!validator.isEmail(email)){
    return res.json({success:false, message: "Enter a valid email"});
    }
    // check if user already registered
    const user = await userModel.findOne({email});
    if(!user){
        return res.json({success:false, message: "User not found"})
    }
    
    // check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.json({success:false, message: "Incorrect password"})
    }

  if(isMatch){ 
    // create token
     const token =createToken(user._id);

    return res.json({success:true, token });
}

 }catch(err){
    console.log(err)
    return res.json({success:false, message:err.message});
  }

}

// userRegister
const userRegister = async (req ,res)=>{

  try{ 
     const {name ,email , password} = req.body;

// checking if user is already registered
const checkUserExists = await userModel.findOne({email});
if(checkUserExists){
    return res.json({success:false, message: "User already registered"})
}
// check valid email
if(!validator.isEmail(email)){
return res.json({success:false, message: "Enter a valid email"});
}
// check password length
if(password.length < 8){
    return res.json({success:false, message: "Password must be at least 8 characters long"})
}

// hashing the password
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt)

// creating the user
const newUser =new userModel({
    name,
    email,
    password: hashedPassword
})

const savedUser = await newUser.save();

// create token
const token =createToken(savedUser._id);

res.json({success:true,  token})

}catch(err) {
    console.log(err)
 return res.json({success:false ,message:err.message});
}




}

// AdminLogin
const adminLogin = async (req ,res)=>{

    try {
            const {email,password} = req.body;
        
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token =createToken(email + password,process.env.JWT_SECRET)
             return res.json({success:true,token})
        }else {
            return res.json({success:false, message: "Invalid email or password"})
        }



    } catch (error) {
        return res.json({success:false ,message:error.message});
    }


}



 export  {adminLogin, userRegister ,userSignIn };















