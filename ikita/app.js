const express = require('express');
const path = require('path');
const User = require('./modules/user/router.js');
const Login = require('./modules/home/router.js');
const Kita = require('./modules/kita/router.js');
const Group = require('./modules/group/router.js');
const calendarEvent = require('./modules/calendar/router.js');
require('./config/db_connection.js');
require('./config/passport.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var multer = require('multer');
const app = express();
var cookieParser = require('cookie-parser');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/assets/img/profil_picture');
    },
    filename: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png)$/)) {
            var err = new Error();
            err.code = 'filetype';
            return cb(err);
        } else {
            cb(null, Date.now() + '-' +  file.originalname);
        }
    }
})

var upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 }
}).single('myFile');

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

app.use(cookieParser());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json 
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

//Routers
app.use('/user', User);

//Routers
app.use('/home', Login);

//Routers
app.use('/kita', Kita);

//Routers
app.use('/kita/group', Group);

//Routers
app.use('/calendar', calendarEvent);

// FileUpload
app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            if (err.code === 'LIMIT_FILE_SIZE') {
                res.json({ success: false, message: 'Die Dateigrösse ist zu gross! Max. 10MB' });
            } else if (err.code === 'filetype') {
                res.json({ success: false, message: 'Die Datei entspricht nicht dem gewünschten Dateiformat! (JPG, JPEG, PNG)'});
            }else {
                console.log(err);
                res.json({success: false, message: 'Der Upload der Datei konnte nicht abgeschlossen werden.'});
            }
        }else{
            if(!req.file){
                res.json({success: false, message: 'Es wurde keine Datei für den Upload ausgewählt!'});
            }else{
                res.json({success: true, message: 'Die Datei wurde erfolgreich hochgeladen.', file: req.file});
            }
        }
    })
})


// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
  });

app.listen(8080, () => console.log('iKita app listening on port 8080!'));

