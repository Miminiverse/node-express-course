import {BaseProduct, Product} from './product.interface'
import {Products} from "./products.interface"

let products: Products = {
    1: {
        id: 1,
        name: 'albany sofa',
        image:
          'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
        price: 39.95,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
    },
    2: {
        id: 2,
    name: 'entertainment center',
    image:
      'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    price: 29.98,
    desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
    },
    3: {
        id: 3,
        name: 'albany sectional',
        image:
          'https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg',
        price: 10.99,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
    },
    4: {
        id: 4,
        name: 'eeather sofa',
        image:
          'https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg',
        price: 9.99,
        desc: `I'm baby direct trade farm-to-table hell of, YOLO readymade raw denim venmo whatever organic gluten-free kitsch schlitz irony af flexitarian.`,
    }
}

export const findAll = async (): Promise<Product[]> => Object.values(products);
export const find = async (id:number): Promise<Product> => products[id]