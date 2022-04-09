const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//REGISTER
router.post("/register", async (req, res) => {
    try {
        //generate salt
        const salt = await bcrypt.genSalt(10)

        //hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, salt)

        //create new user
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        //save user
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (error) {
        res.status(500).json(error)
    }
})


//LOGIN
router.post("/login", async (req, res) => {
    try {
        //find user by username
        const user = await User.findOne({ username: req.body.username })

        //if user exists
        if (user) {
            //check password
            const validPassword = await bcrypt.compare(req.body.password, user.password)

            //if password match
            if (validPassword) {

                //create token
                const accessToken = jwt.sign({
                    id: user._id,
                    isAdmin: user.isAdmin
                }, process.env.JWT_SECRET, { expiresIn: "7d" })

                const { password, ...others } = user._doc;
                res.status(200).json({...others, accessToken})

            } else {
                res.status(401).json("Invalid Password")
            }
        } else {
            res.status(401).json("User does not exist")
        }

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router