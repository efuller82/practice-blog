// initial starting point for Node/Express server
const express = require('express');

// set up express app
const app = express();
var PORT = process.env.PORT || 8080;

// requiring models for syncing
const db = require('./models');

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory
app.use(express.static('public'));

// routes
require('./routes/html-routes.js')(app);
require('./routes/quthor-api-routes')(app);
require('./routes/post-api-routes.js');

// syncing our sequelize models and starting express app
db.sequelize.sync([force: true]).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
    });
});