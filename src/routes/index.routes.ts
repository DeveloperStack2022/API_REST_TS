import {Router} from 'express';
const router = Router();
import {createPhoto,getPhotos,updatePhoto,getPhoto,deletePhoto} from '../controllers/photo.controllers';
import multer from '../libs/multer'
router.route('/photos')
    .get(getPhotos)
    .post(multer.single('image'),createPhoto)

router.route('/photos/:id')
    .post(updatePhoto)
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)
    
export default router;