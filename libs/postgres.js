const {Client} = require('pg')



async function getConnection(){
    const client =new Client({
        host:'localhost',
        port: 5432,
        user: 'brian',
        password: 'admin1234',
        database: 'my_api'

    })
    await client.connect()
}


module.exports = getConnection;
