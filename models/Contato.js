const db = require('./db');

const Contato = db.sequelize.define('contato', {
    nome: {
        type: db.Sequelize.STRING(30)
    },
    email: {
        type: db.Sequelize.STRING(50)
    },
    assunto: {
        type: db.Sequelize.STRING(30)
    },
    mensagem: {
        type: db.Sequelize.STRING(300)
    }
})

//Criar tabela
Contato.sync({force: true})

module.exports = Contato;