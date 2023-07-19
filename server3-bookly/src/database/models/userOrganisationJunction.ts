import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../index.js";

export class User_Organisation extends Model {
  static associate(models) {
    // define association here
  };
  declare id: string;
  declare name: string;
  declare email: string;
}

User_Organisation.init({
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  organisation_id: {
    type: DataTypes.UUID,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'User_Organisation',
});

async () => {
  await User_Organisation.sync({ alter: true })
}
