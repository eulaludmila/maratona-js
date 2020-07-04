const express = require('express');
const {Account} = require('../models');
const bcrypt = require('bcrypt');
const {accountSignUp, accountSignIn} = require('../validators/account');
const {getMessage} = require('../helpers/validator');
const {generateJWT,generateRefreshJWT, verifyJWT} = require('../helpers/jwt');


const router = express.Router();
const saltRounds = 10;


router.post('/sign-in',accountSignIn, async (req,res) => {

    const {email, password}  = req.body;

    const account = await Account.findOne({where: {email}});

    // validar a senha
    const matchPassword = account ? bcrypt.compareSync(password, account.password) : null; // Comparando as senhas

    if(!matchPassword) return res.jsonBadRequest(null,getMessage('account.signin.invalid'));

    const token = generateJWT({id:account.id})
    const refreshToken = generateRefreshJWT({id:account.id})


    return res.jsonOk(account, getMessage('account.signin.success'),{token, refreshToken});
})
router.post('/sign-up', accountSignUp ,async (req,res) => {

    const {email, password}  = req.body;

    const account = await Account.findOne({where: {email}});

    if(account) return res.jsonBadRequest(null,getMessage('account.signup.email_exists'));

    //passar a senha e mais um valor pra ter na string
    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({email, password:hash});

    const token = generateJWT({id:newAccount.id})
    const refreshToken = generateRefreshJWT({id:newAccount.id})

    return res.jsonOk(newAccount, getMessage('account.signup.success'), {token, refreshToken});
})

module.exports = router;