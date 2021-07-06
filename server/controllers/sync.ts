import express from 'express';
import { sequelize } from '../models/index';


export default express.Router()

    .get('/', function (req, res, next) {
       return new Promise((resolve,reject)=>{
        sequelize.sync({ force: true })
        .then(() => {
            resolve("DB Synced Successfully");
        }
        ).catch(function (error) {
            reject(error);
        });
       })
    })