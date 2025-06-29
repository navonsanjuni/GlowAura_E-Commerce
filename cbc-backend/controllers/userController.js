import User from '../models/user.js';
import bcrypt from 'bcrypt';

export function createUser(req, res) {
    
    const user =new User(req.body);

    user.save()
    .then(() => {
        res.json({
            message: "User created successfully"
        })
    }).catch(() => {
        res.json({
            message: "Error creating user"
        })
    })
}