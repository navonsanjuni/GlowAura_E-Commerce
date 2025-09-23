import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

export function createUser(req, res) {
    
  const newUserData = req.body;

  if(newUserData.type == "admin"){
    if(req.user == null){
      res.json({
        mesaage : "Please login as administrator to create an admin user"
      })
      return;
    }
    if(req.user.type != "admin"){
      res.json({
        message: "You are not authorized to create an admin user"
      })
      return;
    } 
  }

  newUserData.password = bcrypt.hashSync(newUserData.password, 10);

  const user = new User(newUserData);

  user
    .save()
    .then(() => {
      res.json({
        message: "User created successfully",
      });
    })
    .catch(() => {
      
      res.json({
        message: "Error creating user",
      });
    });
}

export function loginUser(req, res) {
  User.find({ email: req.body.email }).then((users) => {
    if (users.length == 0) {
      res.json({
        message: "User not found",
      });
    } else {
      const user = users[0];
      const isPasswordValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (isPasswordValid) {
       const token = jwt.sign(
        {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          isblocked: user.isBlocked,
          type: user.type,
          profilePicture: user.profilePicture
        }, process.env.SECRET
       )

       res.json({
        message: " User logged in successfully",
        token: token,
        user: {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          isBlocked: user.isBlocked,
          type: user.type,
          profilePicture: user.profilePicture
        }
       })

      } else {
        res.json({
          message: "User is not loged in, Invalid password",
        });
      }
    }
  });
}

export function isAdmin(req, res){
  if(req.user == null){
    return false;
  }
  if(req.user.type != "admin"){
    return false;
  }

  return true;
}

export function isCustomer(req, res){
  if(req.user == null){
    return false;
  }
  if(req.user.type != "customer"){
    return false ;
  }
  return true;
}


