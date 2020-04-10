import {Schema,Document,model} from 'mongoose';

const UserPhoto = new Schema({
    title:String,
    description:String,
    imagePath:String
})

export interface Iphoto extends Document {
    title:String,
    description:String,
    imagePath:string,
}

export default model<Iphoto>('Photo',UserPhoto);