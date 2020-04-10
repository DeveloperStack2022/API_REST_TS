import mongoose from 'mongoose';
import chalk from 'chalk';

export async function connect (){
    try{
        await mongoose.connect('mongodb://localhost/ts_app_2020', {
            useFindAndModify:false,
            useNewUrlParser:true,
            useUnifiedTopology: true
        });
        console.log(chalk.greenBright('>>database connect succefull'));
    }catch(error){
        console.error('error al conectarse a la base de datos',error);
    }

} 