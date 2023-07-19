import { Model, DataTypes } from 'sequelize';
import { sequelize } from "../index.js";

export class Organisation extends Model {
  static associate(models) {
    // define association here
  };
  declare id: string;
  declare name: string;
  declare email: string;
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



async () => {
  await Organisation.sync({ alter: true })
}
