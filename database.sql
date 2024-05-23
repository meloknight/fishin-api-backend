--   psql --host=free-postgresql-database.postgres.database.azure.com --port=5432 --username=postgres --dbname=postgres
-- Consider adding table for times when fish are catchable
-- Consider adding table for rarity reference
-- Current rarities: common, uncommon, rare, very rare, legendary

CREATE DATABASE fishindb;

CREATE TABLE fish (
    fish_id SERIAL PRIMARY KEY,
    fish_name VARCHAR(255),
    fish_mean_weight_kg REAL,
    fish_weight_boundary_kg REAL,
    fish_mean_length_cm REAL,
    fish_length_boundary_cm REAL,
    rarity VARCHAR(255)
);

CREATE TABLE origins (
    origin_id SERIAL PRIMARY KEY,
    origin_name VARCHAR(255)
);

CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    location_name VARCHAR(255),
    origin_id INT REFERENCES origins(origin_id)
);

CREATE TABLE fish_to_locations (
    fish_id INT REFERENCES fish(fish_id),
    location_id INT REFERENCES locations(location_id)
);

CREATE TABLE lures (
    lure_id SERIAL PRIMARY KEY,
    lure_name VARCHAR(255)
);

INSERT INTO fish_to_locations (location_name, origin_id) VALUES($1, $2);

INSERT INTO origins (origin_name) VALUES("Legend of Zelda: Majora's Mask");


