const {getMessage} = require('../helpers/validator')

//Responsável por padronizar as respostas
const TYPE_JSON = "application/json";
const STATUS_CODE_OK = 200;
const STATUS_CODE_BAD_REQUEST= 400;
const STATUS_CODE_UNAUTHORIZED= 401;
const STATUS_CODE_NOT_FOUND = 404;
const STATUS_CODE_SERVER_FOUND = 500;

const jsonOk = function(data, message,metadata){

    message = (message) ? message : getMessage('response.json_ok');
    metadata = (metadata) ? metadata : {};

    this.status(STATUS_CODE_OK);
    this.type(TYPE_JSON);
    return this.json({message,data,metadata,status:STATUS_CODE_OK});
}
const jsonBadRequest = function(data, message,metadata){

    message = (message) ? message : getMessage('response.json_bad_request');
    metadata = (metadata) ? metadata : {};

    this.status(STATUS_CODE_BAD_REQUEST);
    this.type(TYPE_JSON);
    return this.json({message,data,metadata,status:STATUS_CODE_BAD_REQUEST});
}
const jsonUnauthorized = function(data, message,metadata){

    message = (message) ? message : getMessage('response.json_unauthorized');
    metadata = (metadata) ? metadata : {};

    this.status(STATUS_CODE_UNAUTHORIZED);
    this.type(TYPE_JSON);
    return this.json({message,data,metadata,status:STATUS_CODE_UNAUTHORIZED});
}
const jsonNotFound = function(data, message,metadata){

    message = (message) ? message : getMessage('response.json_not_found');
    metadata = (metadata) ? metadata : {};

    this.status(STATUS_CODE_NOT_FOUND);
    this.type(TYPE_JSON);
    return this.json({message,data,metadata,status:STATUS_CODE_NOT_FOUND});
}
const jsonServerError = function(data, message,metadata){

    message = (message) ? message : getMessage('response.json_server_error');
    metadata = (metadata) ? metadata : {};

    this.status(STATUS_CODE_SERVER_FOUND);
    this.type(TYPE_JSON);
    return this.json({message,data,metadata,status:STATUS_CODE_SERVER_FOUND});
}

//o next é usado para seguir com a requisição caso exista um próximo
const response = (req, res, next) => {

    res.jsonOk = jsonOk;
    res.jsonBadRequest = jsonBadRequest;
    res.jsonUnauthorized = jsonUnauthorized;
    res.jsonNotFound = jsonNotFound;
    res.jsonServerError = jsonServerError;

    next();
}

module.exports = response;