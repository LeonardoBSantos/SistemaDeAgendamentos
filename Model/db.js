const Sequelize = require('sequelize');     //Carrega a dependĂȘncia do sequelize
const sequelize = new Sequelize({           //Instancia o objeto
    dialect: 'sqlite',
    storage: 'database.sqlite'
  })
  
module.exports = sequelize;