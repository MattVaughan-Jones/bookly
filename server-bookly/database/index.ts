import dotenv from 'dotenv';
import { Sequelize, DataTypes, Dialect } from 'sequelize';

dotenv.config();

const host = process.env.HOST;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;

// //TS version of above
// const host = process.env.HOST;
// const dialect = (process.env.DB_DIALECT as unknown as Dialect);
// const port = (process.env.DB_PORT as unknown as number);
// const dbPassword = process.env.DB_PASSWORD;
// const dbName = process.env.DB_NAME ?? 'blank';
// const dbUser = process.env.DB_USER ?? 'blank';

export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: host,
  dialect: dialect,
  port: port,
});

const Organisation = sequelize.define('organisations', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    phone_number: {
      type: DataTypes.STRING,
      is: '^\+?[0-9]{6,18}$',
      allowNull: true,
    }
  },
);

const Service = sequelize.define('services', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: DataTypes.STRING,
    price: DataTypes.FLOAT(2)
  },
);

sequelize.sync().then(() => {
   console.log('Tables created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});
