import express from 'express'
import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import SignIn from '../../front-end/src/components/Login/Login.js';
const router = express.Router();

router.post('/',(req,res)=>{
    const { email, password } = req.body;
    console.log(req.body)
    //simple validation
    if(!email||!password)
        return res.status(400).json({msg: 'Please enter all fields'})
    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({msg: 'User does not exist'})
            // Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credenticals'})
                })
        })
    }
)
router.post('/signin',(req, res) =>{})

export default router;