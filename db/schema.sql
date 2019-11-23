CREATE DATABASE eatburgers;

USE eatburgers;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger VARCHAR(255),
    eaten BOOLEAN,
    PRIMARY KEY(id)
)