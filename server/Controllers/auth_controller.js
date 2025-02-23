const bcrypt = require("bcryptjs")
const User = require("../DB/userSchema")
const { useEffect } = require("react")
const e = require("express")


const home = async (req, res) => {
    try {
        res
        .status(200)
        .send(
            "Home page with authorization"
        )
    }
    catch (err) {
        res.status(400).send({Message : "Page not found"})
    }
}

const login = async (req, res) => {

    try { 
        const { email, pass } = req.body
        const userExist = await User.findOne({ email })
        // console.log(userExist)

        if (!userExist) {
            return res.status(400).json({ message : "Invalid Credentials" })
        }

        const user = bcrypt.compare(pass, userExist.pass)

        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userID: userExist._id.toString(),
                fname: userExist.fname.toString()
            })
        }
        else {
            res.status(401).json({ message : "Invalid email or password" })
        }
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body)
        const { fname, lname, phone, email, pass, repass } = req.body

        const userExists = await User.findOne({ email: email })

        if (userExists) {
            return res.status(400).json({ msg : "Email already exists" })
        }
        else {
            const userCreated = await User.create({ fname, lname, phone, email, pass, repass })
            res.status(201).json({
                msg: "Registration Successful",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });
        }

    }
    catch (err) {
        res.status(500).json({ Message : err })
    }
}

const Mailer = async (req, res) => {
    try {
        console.log(req.body)
    }
    catch (err) {
        res.status(500).json({Message : err})
    }
}


const userData = async (req, res) => {
    try {
        const userInfo = req.user
        res.status(200).json({ userInfo })
    } catch (error) {
        console.log(`Error from the user route ${error}`)
    }
}

module.exports = {home, login, register, userData, Mailer}