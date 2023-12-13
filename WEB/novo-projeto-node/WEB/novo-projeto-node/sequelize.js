module.exports = {
    sequelize,
    User,
  };
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('utelizadores', 'postgres', '2509', {
  host: 'localhost',
  dialect: 'postgres',
});


const Utelizadores = sequelize.define('postgres', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize.sync()
  .then(() => {
    console.log('Tabela sincronizada.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabela:', err);
  });


