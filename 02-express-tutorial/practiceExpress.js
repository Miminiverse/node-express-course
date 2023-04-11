const express = require("express")
const app = express()
const path = require("path")
const PORT = 3000
const consoleLog = require('./practice-middleware')
// app.use(express.static('./new-public'))

app.use(consoleLog)
app.use('/home', express.static(path.join(__dirname, 'new-public')))
app.use('/sample', express.static(path.join(__dirname, 'public')))

// app.get("/", (req,res) => {
//     res.status(200).sendFile(path.resolve(__dirname, "./new-public/index.html"))
// // })
// app.get("/sample", (req,res) => {
//     res.status(200).send("This is working")
// })
app.listen((PORT), () => {
console.log(`listen to ${PORT}`)
})
