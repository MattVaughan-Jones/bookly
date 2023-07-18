import { DataTypes, Model } from 'sequelize'
import { sequelize } from "./index.js";

export class Service extends Model {
    declare id: string;
    declare name: string;
    declare price: number;
}

Service.init({
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Service'
});

async () => {
  await Service.sync({ alter: true })
}
