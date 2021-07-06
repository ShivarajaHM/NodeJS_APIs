import * as Sequelize from "sequelize";
// import hierarchy from 'sequelize-hierarchy'
// import User from './user'

// hierarchy(Sequelize);

const sequelize = new Sequelize.Sequelize(
    'cap_admin',
    'root',
    'root',
    {
        port: 3306,
        host: 'localhost',
        dialect: "mysql",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
    }
);

// const user = User;



sequelize.authenticate()

export { sequelize}
