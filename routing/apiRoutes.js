const fs = require("fs"); 

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/images");

const upload = require("../multer/storage");
const Image = require("../models/img");

module.exports = function(app){

    app.delete("/uploads/:id", (req,res)=>{

        let query= {image:req.params.id};

        Image.remove(query, (err)=>{
            if(err){
                console.log(err);
            }else{
                
                let $filePath= "./uploads/" + req.params.id
                fs.unlinkSync($filePath, (err)=>{
                    if(err){
                        
                        console.log("couldnt delete " + req.params.id + " image");
                    }
                                    
                                
                });

                res.send("The image was deleted...");
            }
        });

    });
    
    app.get("/uploads", (req, res, next)=>{

    Image.find({}, (err, images)=>{
        if(err){
            console.log(err);
        }else{

            res.render("uploads", {
                images: images
            });
        } 
    });
    
        
    });

    app.post("/uploads", (req, res, next)=>{

        upload(req, res, function (err) {
            
            if(req.file == null || req.file == undefined || req.file == ""){
                
                res.redirect("/");
                
            }else{
                
                if (err) {
                    console.log(err);
                }else{
                
                    console.log(req.file);
        
                    let image = new Image();
                    image.image = req.file.filename;
                    image.brand = req.body.image.brand;
            
                    image.save(()=>{
                        if(err){
                            console.log(err);
                        }else{
                            res.redirect("/uploads");
            
                        }
                    });

                }
        
            }

        }); 


        
    });
}