"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
const host = process.env.HOST;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
exports.sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: host,
    dialect: dialect,
    port: port,
});
const Organisation = exports.sequelize.define('organisations', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: sequelize_1.DataTypes.STRING,
    address: sequelize_1.DataTypes.STRING,
    email: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone_number: {
        type: sequelize_1.DataTypes.STRING,
        is: '^\+?[0-9]{6,18}$',
        allowNull: true,
    }
});
const Service = exports.sequelize.define('services', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: sequelize_1.DataTypes.STRING,
    price: sequelize_1.DataTypes.FLOAT(2)
});
exports.sequelize.sync().then(() => {
    console.log('Tables created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
