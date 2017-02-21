'use strict';
module.exports = function(sequelize, DataTypes) {
  const Noun = sequelize.define('Noun', {
    word: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Noun;
};
