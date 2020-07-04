const messages = require('../config/messages.json')


//qual mensagem do json irá ser pega
const getMessage = path => {
    return messages[path] || null;
}

module.exports = {getMessage};