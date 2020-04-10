"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Userdb_1 = __importDefault(require("../models/Userdb"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
/**
 * vamos obtener todas las fotos
 * @param req
 * @param res
 */
async function getPhotos(req, res) {
    const obtFotos = await Userdb_1.default.find();
    return res.status(200).json({ msg: "get photos", obtFotos });
}
exports.getPhotos = getPhotos;
/**
 * metodo para crear  un nuevo collection a la bd
 * @param req
 * @param res
 */
async function createPhoto(req, res) {
    const { title, description } = req.body;
    const newPhoto = {
        title,
        description,
        imagePath: req.file.path
    };
    const photo = new Userdb_1.default(newPhoto);
    console.log(photo);
    await photo.save();
    return res.status(200).json({ msg: 'photo created successfulled', photo });
}
exports.createPhoto = createPhoto;
async function getPhoto(req, res) {
    const { id } = req.params;
    const getPhoto = await Userdb_1.default.findById(id);
    return res.status(200).json(getPhoto);
}
exports.getPhoto = getPhoto;
/**
 * actualizar photo
 */
async function updatePhoto(req, res) {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedPhoto = await Userdb_1.default.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true });
    return res.json({
        message: 'Successfully updated',
        updatedPhoto
    });
}
exports.updatePhoto = updatePhoto;
/**
 * eliminar la img o la collection de la BD
 * @param req
 * @param res
 */
async function deletePhoto(req, res) {
    const { id } = req.params;
    const photo = await Userdb_1.default.findByIdAndRemove(id);
    if (photo) {
        await fs_extra_1.default.unlink(path_1.default.resolve(photo.imagePath));
    }
    return res.status(200).json({ message: 'Photo Deleted' });
}
exports.deletePhoto = deletePhoto;
