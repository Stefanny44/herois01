CREATE DATABASE herois01;

\c herois01

CREATE TABLE herois (
id_heroi SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
poder VARCHAR(100) NOT NULL,
nivel INTEGER NOT NULL,
hp INTEGER NOT NULL


);


CREATE TABLE batalha (
id SERIAL PRIMARY KEY,
id_heroi1 FOREIGN KEY herois


);