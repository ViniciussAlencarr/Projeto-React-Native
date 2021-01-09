'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trackings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      local: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{ //Definindo Foreign Key (FK), referenciando-se a tabela 'users' anteriormente criada
          model: 'users', // Nome da tabela no qual a PK está inserida
          key: 'id' // Como será encontrado o valor da chave, no caso é por " ID "
        },
        onUpdate: 'cascade',// Caso o usuário seja deletado ou alterado, altera ou deleta as Trackings relacionadas
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trackings');
  }
};