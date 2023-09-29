const dotenv = require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const file = "./videos/20MB.mp4";

async function run(){
    try{
        const result = await cloudinary.uploader.upload(file, { resource_type: 'video'})
        console.log(`> Result: ${result.secure_url}`)

    }catch(error){
        console.log(error);

    }

};

run();