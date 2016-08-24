/**************************************************************************************************
 * File: server.js
 * Description: serverside app of ProjektName
 * Author: Sascha Krist
 * Copyright: konzepthaus1 websolutions, Sonthofen
 **************************************************************************************************/

/**************************************************************************************************
 * Load core modules
 **************************************************************************************************/
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
// var conokieParser = require('cookie-parser');
var flash = require('connect-flash');
// var db = require('./configuration/db');
var ports = require('./configuration/port');
// mongoose = require('mongoose'); // Mongoose as a global variable to make sure no connection problems arise
// var expressSession = require('express-session');
// var MongoStore = require('connect-mongo')(expressSession);
var colors = require('colors');
var async = require('async');
// var winston = require("winston");
// var serverHelper = require("./helpers/serverHelpers")(colors, mongoose);

/**************************************************************************************************
 * Define Express Middlewares
 **************************************************************************************************/
app.set('view engine', 'jade');
// app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: "NiMi"}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


/**************************************************************************************************
 * require
 **************************************************************************************************/
// var Models = require('./models/allModels')(mongoose, db.prefix);
require('./passport/init')(passport);


/**************************************************************************************************
 * Start Server
 **************************************************************************************************/
console.log("##############################################################".green);
console.log("#  Starte Server".green);

var connectionString = process.env.CUSTOMCONNSTR_DB_URL;


/**************************************************************************************************
 * Static Files if Development
 **************************************************************************************************/
if (process.env.NODE_ENV == 'production') {
    app.listen(process.env.PORT || 8080);
    require('./routes/mainRoutes')(app, passport); // load our routes and pass in our app
} else {
    app.use(express.static('../build/public'));
    require('./routes/mainRoutes')(app, passport); // load our routes and pass in our app
    app.listen(ports.development, '0.0.0.0', function () {
        console.log('#  Server is listening on port'.green, colors.magenta(ports.development));
    });
}
