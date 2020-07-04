module.exports = (sequelize, DataTypes) =>{
    const Account = sequelize.define('Account', {
        email: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    });

    Account.prototype.toJSON = function(){
        //Pegando todos os valores da requisição get
        const values = {...this.get()};

        //removendo o response do campo senha
        delete values.password;

        return values;
    }

    return Account;
}
