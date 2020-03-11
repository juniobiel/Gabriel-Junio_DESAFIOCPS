CREATE SCHEMA `desafiocps` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `desafiocps`.`contato` (
  `idcontato` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `assunto` VARCHAR(50) NOT NULL,
  `mensagem` VARCHAR(300) NOT NULL,
  PRIMARY KEY (`idcontato`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;