const Reservation = require('../models/Reservation');


// Ajouter une attraction 
exports.addReservation = (req, res) => {
    // on récupère les données présentes dans les inputs sur site
    let reservation = new Reservation (req.body.nom, req.body.mail, req.body.date, req.body.places, req.body.message);
    // on lance la méthode créée dans le model
    Reservation.addReservation((results, error) => {
        if(!error){
            // si pas d'erreur, attraction ajoutée
            // on est redirigé vers la page d'accueil
            res.redirect('./')
        }else{
            // si erreur, message envoyé
            res.status(500).send(error)
        }
        // on envoie reservation
    }, reservation);
};

// Récupère les réservations pour le site
exports.getReservations = (req, res) => {
    Reservation.getReservation((results, error) => {
        if(!error){
            res.render('./admin/reservation', { reservations : results })
        } else {
            res.status(500).send(error);
        }
    });
};

