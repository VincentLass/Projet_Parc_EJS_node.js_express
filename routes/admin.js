// import de express
const express = require('express');
const { body } = require('express-validator');
// import des controllers
const attraction = require('../controllers/attractions');
const reservation = require('../controllers/reservation');
// import de express router
const router = express.Router();

// route vers la page edit-attraction
router.get('/admin/edit-attraction', attraction.getAllAttractionsForAdmin);
// route permettant la modification d'une attraction
router.post('/admin/edit-attraction',  attraction.updateAttractionById);
// route vers la page add-attraction
router.get('/admin/add-attraction', (req, res) => {
    res.render('./admin/add-attraction');
})
// route permettant l'ajout d'une attraction
router.post('/admin/add-attraction', attraction.addAttractionFromAdmin);
// route permettant la suppression d'une attraction
router.post('/admin/edit-attraction/delete-attraction', attraction.deleteAttraction);
// route vers la page 
router.get('/admin/reservation', reservation.getReservations);

module.exports = router;
