// require all packages
// const express = require('express');
// const bodyParser = require('body-parser');
// const expressHandlebars = require('express-handlebars');
// const session = require('express-session');
// const validator = require('express-validator');
// const morgan = require('morgan');
// const userData = require('./users');
// const app = express();
//
// // configure views
// app.engine('handlebars', expressHandlebars());
// app.set('views', './views');
// app.set('view engine', 'handlebars');
//
// // set up the body parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: !1}));
//
// // validator activation
// app.use(validator());
//
// // sessions set up
// app.use(session({
//   secret: 'keyboard warrior',
//   saveUninitiliazed: true,
//   resave: false
// }));
//
// // morgan for whatever it is that it does
// app.use(morgan('dev'));
//
// // create new session i think
// app.use((req, res, next) => {
//   if(!req.session.users){
//     req.session.users = [];
//   }
//   console.log('woohoo')
//   next();
// })
//
// // if there isn't a logged in user we redirect them to the login page
// app.get('/', function(req, res){
//   if(!req.session.users){
//     res.redirect('/login')
//   } else {
//     res.render('home', function(){
//       userHello: req.session.loginAttempt
//     })
//   }
// })
//
// // render the login page
// app.get('/login', function(req, res){
//   res.render('login')
// })
//
//
//
// // configure the post method for logging in
// app.post('/login', function(req, res){
//   let loginAttempt = req.session.body;
//
//
//   req.checkBody('username', 'Username is required').notEmpty()
//   req.checkBody('password', 'Password is required').notEmpty()
//
//   let errors = req.getValidationResult();
//
//   // if (errors) {
//   //     res.render('login', {
//   //       errors: errors
//   //     });
//
//     // } else {
//
// let users = userData.filter(function(userCheck){
//   return userCheck.username === req.body.username;
// });
//
// console.log(users);
//
// // no username or incorrect username
// if(users === undefined || users.length === 0){
//   res.send('Your username was either spelled wrong or incorrect.')
// }
// })
// let pass = userData[0];
//
//     if (pass.password === req.body.password){
//       req.session.user = pass.username;
//       res.redirect('/');
//     }
//   });
//
// app.listen(3000, function() {
//   console.log('Noice');
// });
