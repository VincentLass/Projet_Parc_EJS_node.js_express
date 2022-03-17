// import de express
const express = require('express');
// import des controllers
const attraction = require('../controllers/attractions');
const reservation = require('../controllers/reservation');
const admin = require('../controllers/admin');

// import de express router
const router = express.Router();

// route vers la page d'accueil
router.get('/', (req,res) => {
    res.render ('pages/index');
});
// route vers la page attraction
router.get('/attractions', attraction.getAllAttractions);
// route vers la page reservation
router.get('/reservation', (req,res) => {
    res.render ('pages/reservation');
});
// route permettant d'envoyer la réservation
router.post('/reservation', reservation.addReservation);


// route vers la page connexion
router.get('/connexion', (req,res) => {
    res.render ('pages/connexion');
});

// route permettant la deconnexion
router.get('/deconnexion', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// route permettant d'envoyer la demande de connexion
router.post('/connexion', admin.adminLogin);


module.exports = router;

