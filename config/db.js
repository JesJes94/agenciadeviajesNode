import Sequelize from "sequelize";
import dotenv from 'dotenv/config';

const db = new Sequelize('railway', 'root', 'T5tTxwACDQQBxOQBQRs1', {
    host: 'containers-us-west-84.railway.app',
    port: '6221',
    dialect: 'mysql',
    define: {
        timestamps:false
    },
    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
})

export default db