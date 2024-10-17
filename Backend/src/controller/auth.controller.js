import User from '../models/user.model.js';
import Farmer from '../models/farmer.model.js';
import Company from '../models/company.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Correct import

const signup = async (req, res) => {
    const user = new User(req.body);

    if (!user.name || !user.email || !user.password || !user.role) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }

    const userExists = await User.findOne({ email: user.email });
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Use bcrypt to hash the password
    user.password = await bcrypt.hash(user.password, 10); // 10 is the salt rounds

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

    const isMatch = await bcrypt.compare(password, user.password); // Compare hashed password

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ token });
}

const farmerDetails= async (req, res) => {
    const {name,contact,address,farmSize,email} = req.body;
    if (!name || !contact || !address || !farmSize||!email) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    const farmer = new Farmer({name,contact,address,farmSize,email});
    try {
        await farmer.save();
        const user =await User.findOne({email:email});
        user.detailsReceived=true;
        await user.save();
        return res.status(201).json({ message: "Farmer created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}

const companyDetails=async(req,res)=>{
    const {name,contact,address,GSTNumber,email} = req.body;
    if (!name || !contact || !address || !GSTNumber||!email) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    const company = new Company({name,contact,address,GSTNumber,email});
    try {
        await company.save();
        const user =await User.findOne({email:email});
        user.detailsReceived=true;
        await user.save();
        return res.status(201).json({ message: "Company created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}

export { signup, login, farmerDetails, companyDetails };
