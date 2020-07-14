const express = require('express')
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const router = require('./routes')
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const path = require('path');
const logger = require('morgan');
const db = require('./models')

const app = express()
const port = process.env.port || 3000
// var corsOptions = {
//     origin: "http://localhost:3000"
// }

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// app.use(cors(corsOptions));
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(express.static(DIST_DIR))

// routes
app.use('/api/v1', router)
app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
//load passport strategies
// require("./config/passport/passport.js")(passport, db.Auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.status(404).send({ error: 'Not found' })
  })

// // For passport
// app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500).send({ error: err })
  });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Re-sync db successfully.");
// });

// If you want drop all table before. Using this command:

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));