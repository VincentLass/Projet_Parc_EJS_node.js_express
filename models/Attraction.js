// connecte le model à la base de donnée
const db = require('../database');

class Attraction {
    id
    nom
    image
    description
    id_admin
    constructor(nom, image, description, id_admin)
    {
        this.nom = nom;
        this.image = image;
        this.description = description;
        this.id_admin = id_admin;
        this.id = null;
    }
    // Récupère toutes les attractions
    static getAllAttractions(callback)
    {

        db.query("SELECT * FROM attraction", (error, results) => {
           if (error) throw error;
           return callback(results, error);
        });
    }
    // Modifier une attraction par l'intermédiaire de l'ID
    static updateAttractionById(callback,attraction)
    {
        db.query('UPDATE attraction SET  nom = (?), image = (?), description = (?), id_admin= (?) WHERE id = (?)', [attraction.nom, attraction.image, attraction.description,attraction.id_admin, attraction.id], (error, results) => {
                if (error) throw error;
                return callback(results, error);
        });
    }
    // Ajouter une attraction
    static addAttractionFromAdmin(callback, attraction) 
    {
        db.query('INSERT INTO attraction (nom, image, description, id_admin) VALUES (?, ?, ?, ?)', 
            [attraction.nom, attraction.image, attraction.description, attraction.id_admin], (error, results) => {
                if (error) throw error;
                return callback(results, error);
        });
    }
    // Suppression d'une attraction via l'id
    static deleteAttraction(callback, id) 
    {
        db.query('DELETE FROM attraction WHERE id = (?)', [id], (error, results) => {
            if (error) throw error;
            return callback(results, error);
        });
    }
}
module.exports = Attraction;

