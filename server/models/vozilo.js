module.exports = (sequelize, DataTypes) =>{
    const cars = sequelize.define("Cars", {
        imageUrl: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        manufacturer: {
            type: DataTypes.STRING(120),
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return cars;
}