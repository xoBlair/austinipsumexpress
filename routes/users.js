var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// /routes/users.js
router.get('/new', function(req, res, next) {
    res.render('users/new');
// Create a new user 
    var buddy = new User({
  name: 'Peaches',
  favorite: 'being a cutie'
});

buddy.sayHello();
});


router.post('/', function(req, res, next) {
    var name = req.body.name;
    var favorite = req.body.favorite;     

    var newUser = User({
        name: name,
        favorite: favorite,
    });

    // Save the user
    newUser.save(function(err) {
        if (err) console.log(err);

        res.send('User created!');
    });
});





module.exports = router;
