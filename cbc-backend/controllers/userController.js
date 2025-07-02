import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createUser(req, res) {
    
  const newUserData = req.body;

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
        }, "glowra-secret-key-7973"
       )

       res.json({
        message: " User logged in successfully",
        token: token
       })

      } else {
        res.json({
          message: "User is not loged in, Invalid password",
        });
      }
    }
  });
}


