import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.controller.js";

export const updateUser = async (req, res, next) => {
  if (req.user.id != req.params.id) {
    return next(errorhandler(403, "you can update only your account"));
  }

  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};


export  const deletUser = async (req,res,next) => {
    if(req.user.id != req.params.id) return next(errorhandler(403,'YOU CAN DELETE YOUR OWN ACCOUNT'))

        try{
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('USER HAS BEEN DELETED');
        }catch(error){
            next(error);
        }
};

