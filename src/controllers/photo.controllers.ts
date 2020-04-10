import {Request,Response} from 'express';
import Photo,{Iphoto} from '../models/Userdb';
import path from 'path';
import fs from 'fs-extra';

/**
 * vamos obtener todas las fotos 
 * @param req 
 * @param res 
 */
export async  function getPhotos(req:Request,res:Response):Promise<Response>{
    const obtFotos =  await Photo.find();
    return res.status(200).json({msg:"get photos",obtFotos})
}

/**
 * metodo para crear  un nuevo collection a la bd
 * @param req 
 * @param res 
 */
export async function createPhoto(req:Request,res:Response):Promise<Response>{
    const {title,description} = req.body;
    const newPhoto = {
        title,
        description,
        imagePath: req.file.path
    };
    const photo = new Photo(newPhoto);
    console.log(photo)
    await photo.save();
    
    return res.status(200).json({msg: 'photo created successfulled',photo});
}
export async function getPhoto(req:Request,res:Response):Promise<Response>{
    const {id} = req.params;
    const getPhoto = await Photo.findById(id);
    return res.status(200).json(getPhoto);
}

/**
 * actualizar photo 
 */

export async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    },{new:true});
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}
/**
 * eliminar la img o la collection de la BD
 * @param req 
 * @param res 
 */
 export async function deletePhoto(req:Request,res:Response):Promise<Response>{
    const {id} = req.params;
    const photo= await Photo.findByIdAndRemove(id) as Iphoto;
    if(photo){
        await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.status(200).json({message: 'Photo Deleted'});
 }