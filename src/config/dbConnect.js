const mongoose = require('mongoose');

// aqui colocar a string de conexão definida no atlas(servidor aws)
mongoose.connect(
    "mongodb+srv://admin:102030@cluster0.w3rq7.mongodb.net/alura-node");
/* Essa é a string original: substituir conforme foi realizado acima:

 mongodb+srv://admin:<password>@cluster0.w3rq7.mongodb.net/
 myFirstDatabase?retryWrites=true&w=majority

 Replace <password> with the password for the admin user. 
 Replace myFirstDatabase with the name of the database that connections will use by default. 
 Ensure any option params are URL encoded.
*/

// variável que recebe a conexão    
let db = mongoose.connection;    

module.exports = db;