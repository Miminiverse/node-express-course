
import express, {Request, Response, query} from "express";
const app = express();
import {BaseProduct, Product} from "./products/product.interface"
import * as ProductService from "./products/products.service";

const PORT = 5002

app.get('/api/products/', async (req: Request,res: Response) => {
    try {
        const products: Product[] = await ProductService.findAll();
        res.status(200).send(products)
    } catch (e) {
        console.log(e)
    }
})

app.get('/api/products/:productID', async (req: Request, res: Response) => {
    const {productID} = req.params
    try {
        const product: Product = await ProductService.find(Number(productID))
        if (!product) {
            res.status(404).send("No product found")
        } else {
            res.status(200).send(product)
        }
    }
    catch (e) {
        console.log(e)
    }
})


app.listen(PORT, () => {
    console.log(`Server listen to port ${PORT}`)
})


