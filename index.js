//HACIENDO USO DEL METODO GET
const express = require ('express');
const apiRouter = require('./server');
const cors= require('cors')
const{errorLogs, handlerError} = require ('./middleware/error.handler')
const app = express();
const port = 3000


app.use(cors())
app.use(express.json())


app.get('/',(req, res)=> {
    res.send('Hola mundo')
})

apiRouter(app)

app.use(handlerError)
app.use(errorLogs)


//la req es la request, la peticion
//la res seria la respuesta (RESPONSE)
 app.listen(port, (res, req)=> {
    console.log(`Escuchando en el puerto ${port}`)
 })

 //clase de QUERY
 
