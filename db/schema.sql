DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN default false
);