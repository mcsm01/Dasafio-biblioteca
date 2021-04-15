module.exports = (sequelize, Sequelize) => {
    const Livros = sequelize.define("livro", {
        name_livro: {
            type: Sequelize.STRING
        },
        name_autor: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        data_lancamento: {
            type: Sequelize.DATEONLY
        },
        data_aluguel: {
            type: Sequelize.DATEONLY
        },
        status:{
            type: Sequelize.BOOLEAN
        },
    });
   
    return Livros;
   
};