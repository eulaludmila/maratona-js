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
        jwtVersion: {
            type: DataTypes.INTEGER,
            allowNull:false,
            defaultValue:0,
        }
    });

    Account.associate = models => {
        Account.hasMany(models.Link, {foreignKey:'accountId'});
    }

    Account.prototype.toJSON = function(){
        //Pegando todos os valores da requisição get
        const values = {...this.get()};

        //removendo o response do campo senha
        delete values.password;

        return values;
    }

    return Account;
}
