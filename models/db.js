const Sequelize = require('sequelize');


const sequelize =  new Sequelize('desafiocps', 'desafiocps', 'admin2440', {
    host: 'mysql669.umbler.com:41890',
    dialect: 'mysql',
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}