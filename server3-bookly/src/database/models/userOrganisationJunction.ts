import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../index.js";

export class User_Organisation extends Model {
  declare id: string;
  declare name: string;
  declare email: string;
}

User_Organisation.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
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
