module.exports = function(sequelize, DataTypes) {
  //Create a new table called "pasta" with pasta_name and devoured columns.
  //Sequelize will automatically create timestamp and id columns.
  var Pasta = sequelize.define("pasta", {
    pasta_name: {
                    type: DataTypes.STRING,
                    allowNull: false, //A pasta_name must be entered
                    validate: {
                                len: [1] //The length must be at least 1
                              }
                },
    devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false //Devoured will default to false
              }
    });
  return Pasta; //Return the Pasta object to it can be used
};