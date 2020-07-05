const express = require('express');
const cors = require('cors')
const routes = require('./controllers/auth');
const linkController = require('./controllers/link');
const db = require('./models');
const response = require("./middlewares/response");
const checkJWT = require("./middlewares/jwt");

const app = express();

app.use(cors())

//Middlewares
app.use(response);
app.use(checkJWT);

//Transforma em JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/link',linkController);
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