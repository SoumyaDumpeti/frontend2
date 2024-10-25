const Admin = require('../Models/Admin')
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs')
require('dotenv').config()



const createAdmin = async (req,res) => {
    try {
      
      let data = req.body;

      if (data.password !== data.confirmPwd) {
        return ({ message: "Passwords do not match" })
      }
      let hashedPwd = await bcryptjs.hash(data.password, 5);
      
        let newAdmin = {
          lastName:data.lastName,
          email: data.email,
          password: hashedPwd,
        
        }
        Admin.create(newAdmin)
        res.send({ message: "Admin Created Successfully", newAdmin })
  
    } catch (error) {
      return ({ error: 'Error During Register' })
  
    }
  };
 

  const adminLogin= async(req,res)=>{
      let email=req.body.email
      let password=req.body.password
    
    let admin = await Admin.findOne({ email })
    console.log(admin,"admin")
      let result = await bcryptjs.compare(password, admin.password)
      if (result === false) {
        res.send({ message: "Invalid Password" })
      } else {
       
        let signedPwd=jwt.sign({email:admin.email},process.env.SECRET_KEY,{expiresIn:'1h'})      
        res.send({ message: "Login Success", token: signedPwd, admin })
      }

  }
  module.exports={createAdmin,adminLogin}