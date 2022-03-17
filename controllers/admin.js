const Admin = require("../models/Admin");

exports.adminLogin = (req, res) => {
    // on récupère les données présentes dans les inputs sur site
    let admin = new Admin (req.body.mail, req.body.password);
    // on lance la méthode créée dans le model
    Admin.login((results, error) => {
        if(results.length > 0){
            
            req.session.loggedIn = true;
            req.session.mail = admin.mail;
            id_admin = results[0].id;
            res.redirect('./admin/edit-attraction');
        }else{
            res.send(`Identifiant ou mot de passe incorrect`);  
        }
        res.end();
    }, admin);
};
