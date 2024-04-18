import express from "express";

// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

import User from "../models/User.js"

const router = express.Router();


router.post('/signup', async (req, res) => {
    try {
        const { name, number, age, des } = req.body;
        // const existingUser = await User.findOne({ name });
        // if (existingUser) {
        //     return res.status(400).json({ message: 'Username already exists' });
        // }
        const newUser = new User({name: name, number: number, age :age, des : des });
        await newUser.save();

        res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error during signup', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username } = req.body;
        
        const existingUser = await User.findOne( {username} );
        if (!existingUser) {
            return res.status(400).json({ message: 'User does not exist' });
        }
        // const isValidPassword = bcrypt.compareSync(req.body.password, existingUser.password);
        // if (!isValidPassword) {
        //     return res.status(400).json({ message: 'Invalid password' });
        // }
        // const token = jwt.sign({ id: existingUser._id, isAdmin: existingUser.isAdmin }, process.env.JWT); 
  
        const {password, ...rest }=  existingUser._doc;
    //   return res.status(200).json({token: token, isAdmin: existingUser.isAdmin})
    return res.status(200).json({message: "User Logged In"})
    } catch (error) {
        console.error('Error during signup', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

  router.get("/logout", (req, res, next) => {
    res.clearCookie("access_token").json({message : "You are logged out!!!"});
  })

export default router;