//MIDLEWARES RESPONSÁVEL POR VALIDAR OS TOKEN E COLOCAR NA REQUISIÇÃO O ID DO ACCOUNT

const {verifyJWT, getTokenFromHeaders} = require('../helpers/jwt');


//Valida o token
const checkJWT = (req, res, next) => {

    //Permitir que as rotas de signin e signup não precise de token
    const {url: path} = req;

    const excludedPaths = ['/auth/sign-in','/auth/sign-in','/auth/refresh'];

    const isExcluded = !!excludedPaths.find(p=> p.startsWith(path));//Tranformando em boolean

    //Se existe alguma dessas rotas acima, pode passar sem validar token
    if(isExcluded) return next();


    const token = getTokenFromHeaders(req.headers['authorization']);

    
    if(!token) return res.jsonUnauthorized(null, 'Invalid token');
    if(!token) return res.jsonUnauthorized(null, 'Invalid token');

    try {
        //Decodificando o token, onde vem o id do usuário
        const decoded = verifyJWT(token);
    
        //criando um campo na requisição com o id do usuário logado
        req.accountId = decoded.id;
        next();
    } catch (error) {
        return res.jsonUnauthorized(null, 'Invalid token');
    }
    
}

module.exports = checkJWT;