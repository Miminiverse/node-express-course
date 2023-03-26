const express = require("express")
const app = express()
const path = require("path")

const PORT = 3000

app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./new-public/index.html"))
})
app.get("/sample", (req,res) => {
    res.send("This is working")
})
app.listen((PORT), () => {
    console.log(`listen to port ${PORT}`)
})