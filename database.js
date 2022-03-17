// import de mysql après son installation
const mysql = require('mysql');
// creation de la configuration correspondante à notre base de données
// on définit la connexion
const db = mysql.createConnection({
    host: 'localhost', // Mettre l'hote de notre site
    user: 'root',      // Mettre l'identifiant d'accès à notre BDD
    password: '',      // Mettre le mot de passe de notre BDD
    database: 'parc' // Mettre le nom de notre BDD
});
// on se connecte à la base de données
db.connect(function(err) {
    if (err) throw err;
    console.log('Connecté à la database avec succès!!!');
});
// on exporte db afin de le rendre accessible depuis un autre fichier
module.exports = db;