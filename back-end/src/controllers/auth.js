const express = require('express');
const {Account} = require('../models');
const bcrypt = require('bcrypt');
const {accountSignUp} = require('../validators/account');
const {getMessage} = require('../helpers/validator')

const router = express.Router();
const saltRounds = 10;


router.get('/sign-in',(req,res) => {
    return res.jsonOk(null,"Olá Mundo");
})
router.get('/sign-up', accountSignUp ,async (req,res) => {

    const {email, password}  = req.body;

    const resEmail = await Account.findOne({where: {email}});

    if(resEmail) return res.jsonBadRequest(null,getMessage('account.signup.email_exists'));

    //passar a senha e mais um valor pra ter na string
    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await Account.create({email, password:hash});


    return res.jsonOk(newAccount, getMessage('account.signup.success'));
})

module.exports = router;