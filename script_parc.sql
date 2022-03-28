-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 28 mars 2022 à 15:17
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `parc`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `mail`, `password`) VALUES
(1, 'vincent.lasserre4@orange.fr', 'admin123');

-- --------------------------------------------------------

--
-- Structure de la table `attraction`
--

DROP TABLE IF EXISTS `attraction`;
CREATE TABLE IF NOT EXISTS `attraction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `image` varchar(250) NOT NULL,
  `description` text NOT NULL,
  `id_admin` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `attraction_admin_FK` (`id_admin`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `attraction`
--

INSERT INTO `attraction` (`id`, `nom`, `image`, `description`, `id_admin`) VALUES
(1, '     La Roue de la Mort ', 'https://www.fizzer.com/wp-content/uploads/film-horreur-halloween.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet accumsan justo sit amet maximus. Vestibulum nulla lorem, condimentum quis luctus ac, tempus sed elit. Suspendisse purus libero, elementum nec elit at, cursus maximus est. Aenean nec mollis diam. ', 1),
(2, '  Fast rotation', 'https://cdn.pixabay.com/photo/2016/11/29/09/11/candles-1868640_960_720.jpg', 'In vitae tortor at nunc ultricies elementum. Maecenas vitae orci ut ante consequat dictum. Etiam hendrerit finibus iaculis. Pellentesque posuere eu odio sit amet vulputate. Suspendisse in blandit urna, et laoreet nisi.', 1),
(3, '   Le Chaudron', 'https://laliste.net/wp-content/uploads/2019/05/Horror-land-parc-attraction-clown-e1557395069769-1024x435.jpg', 'Sed sed risus erat. Etiam iaculis elementum cursus. Pellentesque risus lectus, cursus non urna sit amet, iaculis pharetra tellus. Duis vel mollis elit. Vestibulum feugiat lectus vel velit iaculis, id lobortis mi egestas.', 1);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
CREATE TABLE IF NOT EXISTS `reservation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `places` int(11) NOT NULL,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id`, `nom`, `mail`, `date`, `places`, `message`) VALUES
(1, 'valentin ', ' f.valentin@gmail.com', '2021-09-16', 2, 'Peut-on venir avec un animal de compagnie ?'),
(2, 'lasserre', 'vincent.lasserre4@orange.fr', '2021-09-21', 2, '');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `attraction`
--
ALTER TABLE `attraction`
  ADD CONSTRAINT `attraction_admin_FK` FOREIGN KEY (`id_admin`) REFERENCES `admin` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
