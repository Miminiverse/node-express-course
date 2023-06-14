const { query } = require('express')
const Product = require('../models/product')



const getAllProductStatic = async (req,res) => {

    const products = await Product.find({price: {$gt:30}}).sort('price').select('name price')
    res.status(200).json({products,nbHits: products.length})
}

const getAllProduct = async (req,res) => {

    const {featured, company, name, sort, fields, numericFilters} = req.query
    const queryObject = {}

    queryObject = {
        company: "ikea"
    }

    queryObject[company]

    if (featured) {
        queryObject.featured = featured === "true" ? true : false 
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = {$regex: name, $options: "i"}
    }

    if (numericFilters) {
        const operatorMap = {
            ">" : "$gt",
            '>=' : "$gte",
            '<' : "$lt",
            '<=' : "$lte",
            '=' : "$eq"
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g


        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        const options = ['price', 'rating']
        filters = filters.split(",").forEach((item) => {
            const [field, operator, value] = item.split('-')
            console.log(field, operator, value);
            if (options.includes(field)) {
                queryObject[field] = {
                    [operator]: Number(value)
                }
            }
        });
        console.log({"filters": filters});
        console.log(queryObject);

    }
    let result = Product.find(queryObject)


    if (sort) {
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createAt')
    }

    if (fields) {
        const fieldList = fields.split(",").join(" ")
        result = result.select(fieldList)
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit

    result = result.skip(skip).limit(limit)

    const products = await result

    res.status(200).json({products,nbHits: products.length})
}

module.exports = {getAllProductStatic,getAllProduct}