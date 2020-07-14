'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    classroom_id: DataTypes.INTEGER,
    student_name: DataTypes.STRING
  })

  Student.associate = function(models) {
    Student.belongsTo(models.Classroom, {
      foreignKey: 'classroom_id',
      as: 'classroom'
    })
    Student.belongsToMany(models.Course, {
      through: 'StudentCourse',
      as: 'courses',
      foreignKey: 'student_id'
    })
  }
  return Student;
};