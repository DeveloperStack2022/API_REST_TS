"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const photo_controllers_1 = require("../controllers/photo.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/photos')
    .get(photo_controllers_1.getPhotos)
    .post(multer_1.default.single('image'), photo_controllers_1.createPhoto);
router.route('/photos/:id')
    .post(photo_controllers_1.updatePhoto)
    .get(photo_controllers_1.getPhoto)
    .delete(photo_controllers_1.deletePhoto)
    .put(photo_controllers_1.updatePhoto);
exports.default = router;
