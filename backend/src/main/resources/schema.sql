CREATE TABLE plantas
(
    id          INT PRIMARY KEY,
    nombre      VARCHAR(100),
    propiedades VARCHAR(250),
    foto_url    VARCHAR(4000)
);


CREATE TABLE dolencias
(
    id        INT PRIMARY KEY,
    dolencia  VARCHAR(100),
    receta    VARCHAR(250)
);

CREATE TABLE dolencias_plantas
(
    id int primary key,
    dolencia_id int,
    planta_id int,
    foreign key (dolencia_id) references dolencias(id),
    foreign key (planta_id) references plantas(id)
)