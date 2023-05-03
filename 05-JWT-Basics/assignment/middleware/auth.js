const {UnauthenticatedError} = require("../errors")
const jwt = require("jsonwebtoken")


const authenticationMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnauthenticatedError("You are not authorized")
    }

    const token = authHeader.split(" ")[1]
    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {name} = decoded
        req.user = {name}
        next()

    } catch (err){
        throw new UnauthenticatedError("Not authorized")
    }
}


module.exports = authenticationMiddleware