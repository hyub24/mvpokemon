drop database if exists mvpokemon;

create database mvpokemon;

use mvpokemon;

create table bouldertrivia (
  id int auto_increment primary key,
  answer text not null,
  question text not null
);

create table ceruleanpics (
  id int auto_increment primary key,
  answer text not null,
  question text not null,
  pic text not null
);

