
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import bycrypt from 'bcryptjs';

const signup = async (req, res) => {
    const user = new User(req.body);

    if (!user.name || !user.email || !user.password ||!user.role) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    const userExists = await User.findOne({ email: user.email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
 
    user.password = await user.hashPassword(user.password);
    user.save()
        .then(user => {
            return res.status(201).json({ message: "User created successfully" });
        })
        .catch(err => {
            return res.status(500).json({ message: "Something went wrong" });
        });
}


const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
  
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "User does not exist" });
    }

    const isMatch = await bycrypt.compare(password, user.password);
   
    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ token });
}

export { signup, login };