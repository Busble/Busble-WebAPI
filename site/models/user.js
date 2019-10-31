module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    images: DataTypes.STRING,
    roles: DataTypes.STRING,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE,
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};