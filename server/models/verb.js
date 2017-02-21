'use strict';
module.exports = function(sequelize, DataTypes) {
  var Verb = sequelize.define('Verb', {
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
  return Verb;
};
