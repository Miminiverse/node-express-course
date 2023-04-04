const authorize = (req,res,next) => {
    const {member} = req.query
    if (member === "mary") {
        req.user = {name: "mary", id: 3}
        next()
    }
    else {
        res.status(401).send("Unauthorized")
    }
}

module.exports = authorize