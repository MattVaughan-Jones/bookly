import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../index.js";

export class Organisation extends Model {
  declare id: string;
  declare name: string;
}

Organisation.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Organisation',
});
