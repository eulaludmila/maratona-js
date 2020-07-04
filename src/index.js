const express = require('express');
const routes = require('./controllers/auth');
const db = require('./models');
const response = require("./middlewares/response");

const app = express();

//Middlewares
app.use(response);

//Transforma em JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/auth',routes);

app.get('/sign-in', (req, res) => {
    return res.jsonOk(null,'success');
})


//Primeiro vai sincronizar o sequelize e depois vai inicializar o servidor
db.sequelize.sync().then(() => {

    app.listen(3333, () => {
        console.log('Show');
    
    })
})