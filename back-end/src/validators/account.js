const Joi = require('@hapi/joi');
const {getValidatorError} = require('../helpers/messages')

const rules = {
    email: Joi.string().email().required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{6,30}$')),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required()
}

const accountSignIn = (req, res, next) => {
    const {email,password} = req.body;

    const schema = Joi.object({
        email:rules.email,
        password:rules.password
      
    })

    //abortEarly = valida todos os campos de uma vez
    const { error } = schema.validate({email,password}, {abortEarly:false});

    if(error){

        const messages = getValidatorError(error, 'account.signin');

        return res.jsonBadRequest(null, null, {error:messages});
    }



    next();
}; 

const accountSignUp = (req, res, next) => {
    const {email,password, password_confirmation} = req.body;

    const schema = Joi.object({
        email: rules.email,
        password:rules.password,
        password_confirmation: rules.password_confirmation,
    })

    //abortEarly = valida todos os campos de uma vez
    const { error } = schema.validate({email,password, password_confirmation}, {abortEarly:false});

    if(error){

        const messages = getValidatorError(error, 'account.signup');

        return res.jsonBadRequest(null, null, {error:messages});
    }



    next();
}; 

module.exports = {accountSignUp, accountSignIn}