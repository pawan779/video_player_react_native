const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const Video = require('./Video');
const multer = require('multer')
const path = require('path')

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const mongoUri = "mongodb+srv://pawan:FlfyKHFSfblW4lR2@cluster0-jn0dh.mongodb.net/test?retryWrites" +
        "=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

mongoose
    .connection
    .on("connected", () => {
        console.log("connected to mongodb")
    })

// app.post("/upload", (req, res) => {     const file = req.files.image;
// console.log(file.mimetype)         file.mv("./upload/" +
// file.name,(err,result)=>{             if((err)=>{                return
// res.json(err)             })           res.json(result)         }) })

const storage = multer.diskStorage({
    destination: "./../public/uploads",
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, `${file.fieldname}-${Date.now()}${ext}`)
    }
})

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error("You can not upload this type of image files"), false)
    }
    cb(null, true);
};

videoFileFilter= (req, file, cb) => {
    if (!file.originalname.match(/\.(mp4|mov)$/)) {
        return cb(new Error("You can not upload this type of video file"), false)
    }
    cb(null, true);
};

const upload = multer({storage: storage, fileFilter: imageFileFilter})

const videoUpload = multer({storage: storage,fileFilter: videoFileFilter})

app.post('/upload',upload.single('image'),(req,res)=>{
    res.json(req.file);
});

app.post('/video-upload',videoUpload.single('video'),(req,res)=>{
    res.json(req.file);
});

app.post('/add', (req, res) => {
    const addVideo = new Video({
        name: req.body.name,
        image: req.body.image,
        video:req.body.video
    })
    addVideo
        .save()
        .then((data) => {
            res.json(data)
            console.log(data)
        })
        .catch((err) => {
            res.json(err)
        })

})

app.get('/', (req, res) => {
    Video
        .find({})
        .then((data) => {
            res.json(data)
        })
})

app.put('/edit/:id', (req, res) => {
    Video.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then((data) => {
        Video
            .findById({_id: req.params.id})
            .then((data) => {
                res.json(data)
            })
    })

})

app.delete('/delete/:id', (req, res) => {
    Video
        .findByIdAndRemove({_id: req.params.id})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.get('/search/:id', (req, res) => {
    var search = req.params.id;
    Video
        .find({
        name: {
            $regex: search
        }
    })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.listen(3000, () => {
    console.log("server running")
})
