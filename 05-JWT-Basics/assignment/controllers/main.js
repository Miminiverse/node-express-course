
const jwt = require("jsonwebtoken")
const {BadRequestError} = require("../errors")

const logon = async (req,res) => {
    const {name, password} = req.body
    if (!name || !password) {
        throw new BadRequestError("Please provide name and password")
    } 
    const id = new Date().getDate()
    try {
        jwt.sign({name}, process.env.JWT_SECRET,  { expiresIn: '24h' },(err, token) => {
            if (err) throw err;
            console.log(token)
            res.status(200).json({msg: 'User created', token})
        })
    } catch (err) {
        if (err) throw err;
    }

}


const hello = async (req,res) => {
    console.log(req.user)
    res.status(200).json({ msg: req.user.name})

}


module.exports = {
    logon,
    hello
}