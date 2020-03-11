const Sequelize = require('sequelize');

const sequelize =  new Sequelize('desafiocps', 'root', 'admin24', {
    host: '/cloudsql/${desafiocps:southamerica-east1:desafio-cps}',
    dialect: 'mysql',
    dialectOption: {
        socketPath: '/cloudsql/${desafiocps:southamerica-east1:desafio-cps}'
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}