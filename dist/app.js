"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const chalk_1 = __importDefault(require("chalk"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
class App {
    constructor(appInit) {
        this.app = express_1.default();
        this.port = appInit.port;
        this.middlewares();
        this.rutas();
    }
    // metodos
    // settings
    // middlewares
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    // static files or img 
    // routes
    rutas() {
        this.app.use(index_routes_1.default);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(chalk_1.default.magenta(`App listening on the URL -> http://localhost:${this.port}`));
        });
    }
}
exports.App = App;
