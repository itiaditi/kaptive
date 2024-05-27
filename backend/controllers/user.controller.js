
const bcrypt = require("bcrypt");


require("dotenv").config();
const jwt = require('jsonwebtoken');
const { blacklistModel } = require("../models/blacklist.model");
const { userModel } = require("../models/user.model");

const registeruser = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        // Check if user already exists
        const existinguser = await userModel.findOne({ email });
        if (existinguser) {
            return res.status(409).json({ message: "user with this email already exists" });
        }
        const users=await userModel.find();
        let id=1;
        if(users&&users.length>0){
          users.sort((a, b) => a.userId - b.userId)
             id=users[users.length-1].userId;
             id=id+1;
        }
    const userId=id;
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newuser = new userModel({ userId,email, password: hashedPassword, name });
        await newuser.save();

        // Send success response
        return res.status(201).json({ message: "user registered successfully" });
    } catch (error) {
        // Handle errors
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const loginuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });


        if (!user) {
            return res.status(401).send("user is not found try to login");
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw new Error(err.message);
            if (result) {

                const access_token = jwt.sign(
                    { userId: user._id, email,name:user.name },
                    "masai",
                    { expiresIn: "1h" }
                );
                const refresh_token = jwt.sign(
                    { userId: user._id, email, name:user.name },
                    "masai",
                    { expiresIn: "1h" }
                );
                return res.json({ message: 'user login successfully', userId:user._id,accessToken: access_token, refreshToken: refresh_token , name:user.name})
            } else {
                return res.status(401).json({ message: "user credential is wrong" })
            }
        })

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const logoutuser = async (req, res) => {
    const header = req.headers['authorization'];
    const token = header.split(" ")[1];
    try {
        if (!token) {
            return res.status(401).send("token is not provided");
        }
        const userToken = new blacklistModel({ token });
        await userToken.save();
        res.status(200).send('user logout successfully');
    } catch (err) {
        return res.status(400).json({ message: err.message });

    }
}



module.exports = {
    registeruser,
    loginuser,
    logoutuser

}