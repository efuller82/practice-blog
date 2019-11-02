var path = require('path');

module.exports = function (app) {

    //! according to in-class activity:
    // index route loads view.html
    // ? which makes no sense
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/blog.html'));
    });

    app.get('/cms', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/cms.html'));
    });

    app.get('/blog', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/blog.html'));
    });

    app.get('/authors', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/author-manager'));
    });
};