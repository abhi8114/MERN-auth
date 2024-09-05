import User  from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorhandler} from '../utils/error.controller.js';
import jwt from 'jsonwebtoken';

export  const signup = async(req,res,next) => {
    console.log(req.body)
    const { username, email , password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password ,10);
    const newUser = new User({username,email,password: hashedPassword});

    try {
        await newUser.save();
        res.status(201).json({message: 'user created successfully'});
    } catch (error) {
        next(error);        
    }
};


export  const login = async(req,res,next) => { const {email , password} = req.body;
try{
    const validUser = await User.findOne({email});
    if(!validUser) return next(errorhandler(404,'user not found'));

    const checkPassword = bcryptjs.compareSync(password,validUser.password);
    if(!checkPassword) return next(errorhandler(400,'wrong credentials'));

    const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET);

    const {password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    res
        .cookie('access_token', token, {httpOnly: true, expires: expiryDate})
        .status(200)
        .json({...rest});
}catch(error){
    next(error);
}
};