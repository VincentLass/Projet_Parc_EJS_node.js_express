// On récupère la class Attraction
const Attraction = require("../models/Attraction");

// Récupère les attractions
exports.getAllAttractions = (req, res) => {
    // on fait appel à la méthode présente dans la class Attraction
    Attraction.getAllAttractions((results,error) => {
        if(!error){
            res.render('./pages/attractions', { attraction : results });
        } else {
            res.status(500).send(error);
        }
    });
};
// Récupère les attractions pour la partie Admin
exports.getAllAttractionsForAdmin = (req, res) => {
    Attraction.getAllAttractions((results,error) => {
        if(error) throw error;
        res.render('./admin/edit-attraction', { attractions : results });
    });
};
// Modifier une attraction par l'ID
exports.updateAttractionById = (req, res) => {

    let attraction = new Attraction (req.body.nom, req.body.image, req.body.description);
    attraction.id_admin = id_admin;
    attraction.id = req.body.id;

    Attraction.updateAttractionById((results, error) => {
        if(!error){
            res.redirect('./edit-attraction');
        }else{
            res.status(500).send(error);
        }
    }, attraction);
};

// Ajouter une attraction 
exports.addAttractionFromAdmin = (req, res) => {

    let attraction = new Attraction (req.body.nom, req.body.image, req.body.description);
    attraction.id_admin = id_admin;

    Attraction.addAttractionFromAdmin((results, error) => {
        if(!error){
            res.render('./admin/admin');
        }else{
            res.status(500).send(error);
        }
    }, attraction);
};
// Supprimer une attraction
exports.deleteAttraction = (req,res) => {
    
    let id = req.body.id;

    Attraction.deleteAttraction((results,error) => {
        if(!error){
            res.render('./admin/admin');
        }else{
            res.status(500).send(error);
        }
    }, id);
};

