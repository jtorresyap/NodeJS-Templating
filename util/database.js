const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'foundation8', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;