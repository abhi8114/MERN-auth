import jwt from 'jsonwebtoken';
import { errorhandler } from './error.controller';

export const verifyToken = (req,res,nest) => {
    const token = req.cookies.access_token;
    if (!token) return next(errorhandler(401, 'YOU ARE NOT AUTHORIZED'));
    
    jwt.verify(token,process.nextTick.JWT_SECRET, (err, user) => {
        if(err) return next(errorhandler(401, 'INVALID TOKEN'));
        req.user = user;
        next();
    });
};