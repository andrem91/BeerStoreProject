CREATE DATABASE beerstore
DEFAULT CHARACTER SET UTF8
DEFAULT COLLATE utf8_general_ci;

use beerstore;

CREATE TABLE descricao_produto (
id_descricao_produto INT NOT NULL AUTO_INCREMENT,
produto VARCHAR(80),
preco decimal(6, 2),
imagem VARCHAR(200),
PRIMARY KEY(id_descricao_produto)
)CHARSET = utf8
ENGINE = InnoDB;

INSERT INTO descricao_produto VALUES 
(default, 'Cerveja Unicorn IPA Lata 473ml', 20.90, 'Cerveja-Unicorn-IPA-Lata-473ml.jpg'),
(default, 'Cerveja Unicorn Premium Lager Lata 350ml', 8.90, 'Cerveja-Unicorn-Premium-Lager-Lata-350ml.jpg'),
(default, 'Cerveja Unicorn Witbier Lata 473ml', 15.90, 'Cerveja-Unicorn-Witbier-Lata-473ml.jpg'),
(default, 'Cerveja Bodeborwn Tripel Montfort Garrafa 750ml', 120.00, 'Cerveja-Bodeborwn-Tripel-Montfort-Garrafa-750ml.jpg'),
(default, 'Cerveja Everbrew DoubleBlend Juice Double IPA Lata 475ml', 45.99, 'Cerveja-Everbrew-DoubleBlend-Juice-Double-IPA-Lata-475ml.jpg'),
(default, 'Cerveja Chimay Triple Garrafa 330ml', 41.00, 'Cerveja-Chimay-Triple-Garrafa-330ml.jpg');

CREATE TABLE marca (
id_marca INT NOT NULL AUTO_INCREMENT,
marca VARCHAR(50),
PRIMARY KEY(id_marca)
)CHARSET= utf8,
ENGINE = InnoDB;

INSERT INTO marca VALUES
(default, 'StartUp'),
(default, 'Zalaz'),
(default, 'Bodebrown'),
(DEFAULT, 'Chimay');

CREATE TABLE estilo (
id_estilo INT NOT NULL AUTO_INCREMENT,
estilo VARCHAR(50),
PRIMARY KEY(id_estilo)
)CHARSET = utf8,
ENGINE = InnoDB;

INSERT INTO estilo VALUES 
(default, 'American IPA'),
(default, 'Witbier'),
(default, 'Lager'),
(default, 'Tripel'),
(default, 'New England Double IPA');


CREATE TABLE origem (
id_origem INT NOT NULL AUTO_INCREMENT,
origem VARCHAR(50),
PRIMARY KEY(id_origem)
)CHARSET = utf8,
ENGINE = InnoDB;

INSERT INTO origem VALUES
(default, 'Brasil'),
(default, 'Bélgica');

CREATE TABLE produto (
id_produto INT NOT NULL AUTO_INCREMENT,
id_descricao_produto INT,
id_marca INT,
id_estilo INT,
id_origem INT,
PRIMARY KEY(id_produto, id_descricao_produto, id_marca, id_estilo, id_origem),
FOREIGN KEY(id_descricao_produto) REFERENCES descricao_produto(id_descricao_produto), 
FOREIGN KEY(id_marca) REFERENCES marca(id_marca),
FOREIGN KEY(id_estilo) REFERENCES estilo(id_estilo),
FOREIGN KEY(id_origem) REFERENCES origem(id_origem)
)CHARSET = utf8,
ENGINE = InnoDB;

INSERT INTO produto VALUES
(DEFAULT, 1, 1, 1, 1),
(DEFAULT, 2, 1, 3, 1),
(DEFAULT, 3, 1, 2, 1),
(DEFAULT, 4, 3, 4, 1),
(DEFAULT, 5, 2, 5, 1),
(DEFAULT, 6, 4, 4, 2);

SELECT * FROM descricao_produto
inner join produto
	on descricao_produto.id_descricao_produto = produto.id_descricao_produto
inner join marca
	on produto.id_marca = marca.id_marca
inner join estilo
	on produto.id_estilo = estilo.id_estilo
inner join origem
	on produto.id_origem = origem.id_origem
;

CREATE TABLE clube (
  idpedidos int NOT NULL AUTO_INCREMENT,
  nome_cliente varchar(80) NOT NULL,
  endereco varchar(150) NOT NULL,
  telefone varchar(20) NOT NULL,
  nome_produto varchar(150) NOT NULL,
  valor_unit decimal(8,2) DEFAULT NULL,
  quantidade int NOT NULL,
  valor_final decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (idpedidos)
)CHARSET = utf8
ENGINE = InnoDB;

select * from clube;