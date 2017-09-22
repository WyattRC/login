const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const morgan = require('morgan');
const userData = require('./users');
const app = express();


// configure views
app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// validator activation
app.use(validator());


app.use(session({
  secret: 'keyboard warrior',
  resave: false,
  saveUninitialized: true
}));

app.use(morgan('dev'));


app.use((req, res, next) => {
  if(!req.session.users){
    req.session.users = [];
  }
  console.log(req.session.users)
  next();
})


app.get('/', (req, res) => {
  if(req.session.users.length === 0 || req.session.users.length === !1){
    res.redirect('/login')
  } else {
    res.render('home', {userHello : req.session.users})
  }
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/loginAttempt', (req, res) => {
  let user = req.body

  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
for(let i = 0; i< userData.length; i++){
  if(user.username === userData[i].username && user.password === userData[i].password){
    req.session.users.push(userData[i])
    console.log(req.session.users);
  }
}
res.redirect('/')
})

app.post('/logout',(req, res) => {
  req.session.users.length = [];
  res.redirect('/')
})

app.listen(3000, function() {
  console.log('success');
});
