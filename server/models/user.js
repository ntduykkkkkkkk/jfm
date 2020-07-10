'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            unique: true,
            isEmail: true,
            len: [6,50],
            notEmpty: true,
            notNull: {
                msg: 'Email is required field'
            },
            notEmpty: {
                msg: 'Please enter your email'
            }
        }
    },
    password: { 
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
            len: [6,50],
            is: /^[a-z]+$/i,
            notEmpty: true,
            notNull: {
                msg: 'Password is required field'
            },
            notEmpty: {
                msg: 'Please enter your password'
            }
        }
    },
    role: {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue: 'user',
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: {
                msg: 'Role is required field'
            },
            notEmpty: {
                msg: 'Please enter role'
            }
        }
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: {
                msg: 'Status is required field'
            },
            notEmpty: {
                msg: 'Please enter status'
            }
        }
    }
  }, {});

  return User;
};