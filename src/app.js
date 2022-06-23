const express = require('express');
const body_parser = require ('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const grid_fs_storage = require('multer-gridfs-storage');
const grid_fs = require('gridfs-stream');
const method_override = require('method-override');




const app = express();
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(method_override('_method'));
app.set('view engine', 'ejs');
app.set('views', __dirname);

const mongo_uri = 'mongodb+srv://MJSN:l0f3i4mIS7T54@cluster0.i7zyg.mongodb.net';

const connection = mongoose.createConnection(mongo_uri);

//Init GridFS
let gfs;

//Init stream
connection.once('open', () => {
  gfs = grid_fs(connection.db, mongoose.mongo);
  gfs.collection('cars.brands_logos');
});

// Create storage engine

const storage = new grid_fs_storage({
  url: mongo_uri,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if(err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const file_info = {
          filename: filename,
          bucketName: 'brands_logos'
        };
        resolve(file_info);
      })
    })
  }
});

const upload = multer({ storage });

// @route GET /
// @desc Loads form
app.get('/', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      res.render('index', { files: false });
    } else {
      files.map(file => {
        file.isImage = file.contentType === 'image/jpeg' ||
          file.contentType === 'image/png';
      });
      res.render('index', { files: files });
    }
  });
});

// @route POST /upload
// @desc  Uploads file to DB
app.post('/brands_logos', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
  res.redirect('/');
});

// @route GET /files
// @desc  Display all files in JSON
app.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    // Files exist
    return res.json(files);
  });
});

// @route GET /files/:filename
// @desc  Display single file object
app.get('/files/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // File exists
    return res.json(file);
  });
});

// @route GET /image/:filename
// @desc Display Image
app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

// @route DELETE /files/:id
// @desc  Delete file
app.delete('/files/:id', (req, res) => {
  gfs.remove({ _id: req.params.id, root: 'uploads' }, (err, gridStore) => {
    if (err) {
      return res.status(404).json({ err: err });
    }

    res.redirect('/');
  });
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));



