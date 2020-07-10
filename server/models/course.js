'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var Course = sequelize.define('Course', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    course_name: DataTypes.STRING,
    lecturer_id: DataTypes.INTEGER
  })

  Course.associate = function(models) {
    Course.belongsToMany(models.Student, {
      through: 'StudentCourse',
      as: 'students',
      foreignKey: 'course_id'
    })

    Course.belongsTo(models.Lecturer, {
      foreignKey: 'lecturer_id',
      as: 'lecturer'
    })
  }
  return Course;
};