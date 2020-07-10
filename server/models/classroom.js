'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var Classroom = sequelize.define('Classroom', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    classroom_name: DataTypes.STRING
  }, {});

  Classroom.associate = function(models) {
    Classroom.hasMany(models.Student, {
      foreignKey: 'classroom_id',
      as: 'student',
    });
  };
  return Classroom;
};