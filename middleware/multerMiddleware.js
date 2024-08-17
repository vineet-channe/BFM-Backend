import multer from "multer";
import path from "path";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname +'-'+ Date.now()+path.extname(file.originalname))
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
}).single('myFile');

export default upload;


// specific modifications and filtering of files would be made according the inputs that would be expected from the frontend