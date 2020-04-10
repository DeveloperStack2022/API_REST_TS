"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const chalk_1 = __importDefault(require("chalk"));
async function connect() {
    try {
        await mongoose_1.default.connect('mongodb://localhost/ts_app_2020', {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(chalk_1.default.greenBright('>>database connect succefull'));
    }
    catch (error) {
        console.error('error al conectarse a la base de datos', error);
    }
}
exports.connect = connect;
