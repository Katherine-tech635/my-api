const express = require ('express');
const serviceUsers =require ('../service/serviceUsers')
const router = express.Router()


 router.get('/', async (req, res)=> {
   const getUsers = await serviceUsers.getAllUsers(req, res)
   return getUsers
 })
 //limit numero maximo de registros a retornar(recibe 1 argumento, numerico, positivo)
 //offset el numero del primer registro a retornar (siempre es 0 y no 1)


 module.exports = router;