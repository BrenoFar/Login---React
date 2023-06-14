module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        username: {
            id: DataTypes.INTEGER,
            type: DataTypes.STRING,
            allowNull: false,
            unique: true  
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return User;
}
