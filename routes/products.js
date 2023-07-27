const express = require ('express');
const productServices = require('../service/serviceProducts')
//es ../service sin S
const router = express.Router()
const validatorHendler = require('../middleware/validator.handler')
const {schemaProductCreate, updateSchemaProduct, getProductSchema} = require('../schema/schemaProduct')



router.get('/', async (req, res, next)=> {
    try {
        const products = await productServices.getAllProducts(req, res)
    res.json(products)
    } catch (error) {
       next(error) 
    }


})

router.post('/', validatorHendler(schemaProductCreate, 'body'),
async (req, res)=>{
 const createnewProduct=  productServices.createnewProduct(req,res)
return createnewProduct
})



router.patch('/:id',
validatorHendler(getProductSchema, 'params'),
validatorHendler(updateSchemaProduct, 'body'),
async(req, res)=> {
   const updateProduct = await productServices.updateProduct(req, res)
   res.json(updateProduct)
})

router.delete('/:id',async (req, res) =>{
   const updateProduct = await productServices.updateProduct(req,res)
    return updateProduct
})

router.get('/:id', validatorHendler(getProductSchema, 'params'),
 async (req, res)=> {
    const getOneProduct= await productServices.getOneProduct(req,res)
    return getOneProduct
})




module.exports=router;
