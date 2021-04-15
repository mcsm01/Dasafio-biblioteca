module.exports = (sequelize, Sequelize) => {
    
    const Locatario = sequelize.define("locatario", {
        name: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING
        },
        status:{
            type: Sequelize.BOOLEAN
        },

    });

    return Locatario;
};