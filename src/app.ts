import express,{Application} from 'express';
import morgan from 'morgan'; 
import cors from 'cors';
import chalk from 'chalk';
import routes from './routes/index.routes';
export class App {

    // atributos
    private app:Application;
    private port:any;
    
    constructor(appInit:{port:any}){

        this.app = express();
        this.port = appInit.port
        this.middlewares();
        this.rutas();
    }

    // metodos
    // settings

    // middlewares
    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }
    // static files or img 
    
    // routes
    rutas(){
        this.app.use(routes);
    }


    public start() {
        this.app.listen(this.port, () => {
            console.log(chalk.magenta(`App listening on the URL -> http://localhost:${this.port}`))
        })
    }

}