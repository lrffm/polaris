USE polaris;

CREATE TABLE User (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(256) NOT NULL,
    mail VARCHAR(512) NOT NULL UNIQUE,
    mdp_hash VARCHAR(1024) NOT NULL
)
ENGINE=INNODB;