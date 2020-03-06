import { Sequelize } from 'sequelize-typescript';
import { mysqldb } from './keys';

export const sequelize = new Sequelize({
    host: mysqldb.HOST,
    dialect: 'mysql',
    username: mysqldb.USERNAME,
    password: mysqldb.PASSWORD,
    database: mysqldb.DATABASE,
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: false,
    models: [__dirname + '/models/*.model.ts']
});