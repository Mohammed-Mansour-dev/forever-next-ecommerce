import jwt from 'jsonwebtoken';




const userAuth =async (req, res, next) => {



const {token} = req.headers

if(!token){
    return res.json({success:false, message:"not Authorized Login again "});
}

try{const decoded_token =jwt.verify(token,process.env.JWT_SECRET)

   req.body.userId = decoded_token.id
next()
}catch(err){
    console.log(err)
    return res.json({success:false, message:err.message});
}


}

export default userAuth


