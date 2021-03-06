drop database if exists burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int PRIMARY KEY NOT NULL
    AUTO_INCREMENT,
    burger_name VARCHAR
    (256) NOT NULL,
    devoured BOOLEAN DEFAULT false
);