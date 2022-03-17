const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
const path = require('path');
let ejs = require('ejs');
// gestion de la connexion
let session = require('express-session');

// const { body, validationResult } = require('express-validator');

// import du port où sera lancée l'app
const port = 3300;

const adminRoutes = require('./routes/admin');
const parcRoutes = require('./routes/parc');

// l'affichage se fera avec ejs
app.set('views','./views');
// moteur de template
app.set('view engine', 'ejs');

app.use( express.static(path.join(__dirname,'public')));

// On va utiliser body parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
	key: 'test',
	secret: 'index',
	resave: false,
	saveUninitialized: true,
	cookie: {
		expires: 600000
	}
}));

// utilisation des routes
app.use(adminRoutes);
app.use('/', parcRoutes);


// Pour lancer l'application on utilise ce code : 
app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })