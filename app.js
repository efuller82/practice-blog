// Setup
var express = require('express');
var app = express();

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost27017/node-blog')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var postSchema = new mongoose.Schema({ body: String });

var Post = mongoose.model('Post', postSchema);


//Routes
app.get('/', (req, res) => {
    // Post.find({}, (err, posts) => {
    res.render('index')
    //! breaks when I add this
    // , { posts: posts });
    // });
});

// app.post('/addpost', (req, res) => {
//     var postData = new Post(req.body);
//     postData.save().then(result => {
//         res.redirect('/');
//     }).catch(err => {
//         res.status(400).send('Unable to save data');
//     });
// });

// app.get('/addPost', (req, res) => {
//     res.render('blog')
// });

// Listen
app.listen(3001, () => {
    console.log('Server listening on 3001');
});

