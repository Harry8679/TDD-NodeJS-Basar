const Sequelize = require('sequelize');

const sequelize = new Sequelize('hoaxify', 'my-db-user', 'db-password', {
    dialect: 'sqlite',
    storage: './database.sqlite',
});

module.exports = sequelize;