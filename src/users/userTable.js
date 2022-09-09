const { DataTypes } = require("sequelize")
const { sequelize } = require('../db/connection') 

const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
        unique: true
    },
});

module.exports = User;