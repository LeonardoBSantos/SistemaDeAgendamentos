const Sequelize = require('sequelize');
const database = require('./db');


const Agendamento = database.define('agendamento', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    local: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    datainicio: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    datafim: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Agendamento;




