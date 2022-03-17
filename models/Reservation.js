// connecte le model à la base de donnée
const db = require('../database');

class Reservation {
    id
    nom
    mail
    date
    places
    message
    constructor(nom, mail, date, places, message){
        this.nom = nom;
        this.mail = mail;
        this.date = date;
        this.places = places;
        this.message = message;
        this.id = null;
    }
    // Récupère les réservations
    static getReservation(callback)
    {
        db.query("SELECT * FROM reservation", (error, results) => {
           if (error) throw error;
           return callback(results, error);
        });
    }
    // Ajouter une réservation
    static addReservation(callback, reservation) 
    {
        // on veut passer des donnéesà query par l'intermédiaire des ?
        db.query('INSERT INTO reservation (nom, mail, date, places, message) VALUES (?, ?, ?, ?, ?)', 
        // valeur des ? dans le tableau en dessous
            [reservation.nom, reservation.mail, reservation.date, reservation.places, reservation.message], (error, results) => {
                if (error) throw error;
                return callback(results, error);
        });
    }
}
module.exports = Reservation;

