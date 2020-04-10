"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = require("./database");
async function main() {
    dotenv_1.default.config();
    database_1.connect();
    const app = new app_1.App({
        port: process.env.SERVER_PORT || 3000
    });
    await app.start();
}
main();
