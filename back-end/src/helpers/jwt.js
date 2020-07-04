require('dotenv').config();
const jwt = require('jsonwebtoken');


const tokenPrivateKey = process.env.JWT_TOKEN_PRIVATE_KEY;
const tokenRefreshPrivateKey = process.env.JWT_REFRESH_TOKEN_PRIVATE_KEY;

//Em quanto tempo o token expira
const options = { expiresIn: '30 minutes'};
const refreshOptions = { expiresIn: '30 days'};

//Gerar jwt
const generateJWT = (payload /*corpo do jwt*/) => {
    return jwt.sign(payload,tokenPrivateKey, options)
};

const generateRefreshJWT = (payload /*corpo do jwt*/) => {
    return jwt.sign(payload,tokenRefreshPrivateKey, refreshOptions)
};

//Verificar JWT
const verifyJWT = (token) => {
    return jwt.verify(token, tokenPrivateKey);
}


const verifyRefreshJWT = (token) => {
    return jwt.verify(token, tokenRefreshPrivateKey);
}

module.exports = {generateJWT, verifyJWT, generateRefreshJWT, verifyRefreshJWT};