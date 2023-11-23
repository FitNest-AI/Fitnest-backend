const multer = require('multer');
const path = require('path');
const dateFormat = require('dateformat');
const multerGoogleStorage = require('multer-cloud-storage');

const randomstring = require('randomstring');

const uploadToBucket = (destination) => multer({
  storage: multerGoogleStorage.storageEngine({
    projectId: process.env.GCS_PROJECT_ID,
    bucket: process.env.GCS_BUCKET_NAME,
    keyFilename: process.env.GCS_KEY_FILE,
    acl: 'publicRead',

    destination: destination,
    filename: async (req, file, done) => {
      done(null, `${randomstring.generate()}-${dateFormat(new Date(), 'yyyymmdd-HHMMss')}`);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, next) => checkFileType(req, file, next),
});

// to check file type
const checkFileType = (req, file, next) => {
  const fileTypes = /jpeg|jpg|png|svg|gif/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    next(null, true);
  } else {
    req.fileTypeError = {message: 'Invalid file type'};
    next();
  }
};

module.exports = {uploadToBucket};
