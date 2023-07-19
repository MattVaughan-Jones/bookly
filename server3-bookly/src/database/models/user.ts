import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../index.js";

export class User extends Model {
  static associate(models) {
    // define association here
  };
  declare id: string;
  declare name: string;
  declare email: string;
}

User.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Organisation',
});

async () => {
  await User.sync({ alter: true })
}
