import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: 'pepe',
    database: 'saveleafdb',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    logging: false,
    models: [__dirname + '/models/*.model.ts']
});