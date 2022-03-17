// import acces database
const db= require('../database');

class Admin {
    id
    mail
    password
    constructor(mail, password){
        this.mail = mail;
        this.password = password;
        this.id = null;
    }

    // Récupère l'admin par pour connexion
    static login(callback, admin)
    {
        db.query('SELECT * FROM admin WHERE mail = (?) AND password = (?) ', [admin.mail, admin.password], (error, results) => {
           if (error) throw error;
           return callback(results, error);
        });
    }

}
module.exports = Admin;

