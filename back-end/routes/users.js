import express from 'express'
import User from '../models/user.js'
import bcrypt from 'bcryptjs'
const router = express.Router();

router.post('/',(req,res)=>{
    const { name, email, password } = req.body;
    console.log(req.body)
    //simple validation
    if(!name||!email||!password)
        return res.status(400).json({msg: 'Please enter all fields'})
    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if(user) return res.status(400).json({msg: 'User already exists'})

            const newUser = new User({ name, email, password })
            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            res.json({
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        })
                })
            })
        })
    }
)
router.post('/signup', (req, res) => {
    const {name, email, password, password2 } = req.body
    
    //check required fields
    if(!name || !email || !password || !password2) {
        return res.status(400).json({msg: 'Please enter all fields'})
    }
    //check passwords match
    if(password!==password2){
        return res.status(400).json({msg: 'Password does not match'})
    }
})

export default router;