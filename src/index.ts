import {App} from "./app";
import dotenv from 'dotenv';
import {connect} from './database';

async function main(){
    dotenv.config();
    connect();
    const app = new App({
        port: process.env.SERVER_PORT || 3000
    });
    await app.start();
}

main();  