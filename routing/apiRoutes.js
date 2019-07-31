const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/images");

const Image = require("../models/img");

const multer = require('multer');

// define storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// checks filetype before storing to db
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// pass storage params for multer
const upload = multer({
  storage: storage,
  limits: 500 * 500 * 5,
  fileFilter: fileFilter
});


module.exports = function(app){
    
    app.get("/api/uploads", (req, res, next)=>{

        Image.find({}, (err, images)=>{
            if(err){
                console.log(err);
            }else{

                res.JSON({
                    images: images
                });
            } 
        });
    
    });

    app.post("/api/uploads", upload.single('dogPic'), (req, res) => {
        
        Image.create({
            "image": req.body.image,
            "brand": req.body.brand
        }).then(result => {
            res.redirect("/console");
        }).catch(err => {
            res.json(err);
        });
        
    });
}  