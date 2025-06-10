import User from '../model/userModel.js'
import bcrypt, { hash } from 'bcryptjs'

const getUserHomePage = (req, res)=>{
    res.status(200).json({message: "User home page"})
}

const createNewUser = async (req, res) => {
    const { username, email, password } = req.body
    try {
        if (!username || !password || !email) {
            res.status(401).json({ error: "all fields are required" })
        }
        const isExisting = await User.findOne({ username })
        if (isExisting) {
            res.status(401).json({ message: "User already exists" })
        }
        const hashedPwd = await bcrypt.hash(password, 10)
        const newUser = await User.create({ username, email, password: hashedPwd })
        res.status(200).json({ message: `user registration success for ${newUser.username}` })
    } catch (err) {
        res.status(500).json({ error: "Internal server error" })
    }
}

const signInUser = async (req, res) => {
    const { username, password } = req.body

    try {
        if (!username || !password) {
            res.status(401).json({ error: "all fields are required" })
        }
        const user = await User.findOne({ username })
        if (!user) {
            res.status(401).json({ error: "no user found" })
        }
        const isCorrectPwd = await bcrypt.compare(password, user.password)
        if (!isCorrectPwd) {
            res.status(401).json({ error: "login failed, incorrect password" })
        }
        req.session.user = user // store the user in the session object, so that we can use it in other routes
        res.redirect('/')
    } catch (err) {
        res.status(500).json({ error: "internal server error" })
    }
}

export default {
    getUserHomePage,
    createNewUser,
    signInUser
}
