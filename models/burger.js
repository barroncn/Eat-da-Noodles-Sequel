module.exports = function(sequelize, DataTypes) {
  var Pasta = sequelize.define("pasta", {
    pasta_name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    validate: {
                                len: [1]
                              }
                },
    devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
              }
    });
  return Pasta;
};