const Sequelize = require('sequelize');


const sequelize =  new Sequelize('desafiocps', 'desafiocps', 'admin2440', {
    host: 'mysql669.umbler.com',
    dialect: 'mysql',
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}