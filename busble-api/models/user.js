module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
    telno_verify: DataTypes.BOOLEAN,
    email_verify: DataTypes.BOOLEAN,
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