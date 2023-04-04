const express = require('express')
const app = express()
const { products } = require('./data')

// app.use(express.static("./public"))

app.get('/', (req,res) => {
    res.send('<h1> Home Page wer</h1> <a href="/api/products">Products</a>')
})
// sending a request is a string ==> convert to number to compare with the data
app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params
    const product = products.find((product) => product.id === Number(productID))
    
    if (!product) {
        res.status(404).send("No product found") 
    } else {
        res.send(product)
    }
})

app.get('/api/v1/query', (req,res) => {
    const {search, limit} = req.query
    let sortedProducts = [...products]

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    } if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    } if (sortedProducts.length < 1) {
        return res.status(200).send("No products matched the search")
    }
    return res.json(sortedProducts)
})


app.listen(5002, () => {
    console.log("Server listen to port 5002")
})