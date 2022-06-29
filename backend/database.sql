-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema apside_road
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema apside_road
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `apside_road` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `apside_road` ;
-- -----------------------------------------------------
-- Table `apside_road`.`agency`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`agency` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `apside_road`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(255) NOT NULL,
  `lastname` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `job` VARCHAR(255) NOT NULL,
  `ROLE` TINYINT NOT NULL,
  `agency_id` INT NOT NULL,
  PRIMARY KEY (`id`, `agency_id`),
  INDEX `fk_user_agency1_idx` (`agency_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_agency1`
    FOREIGN KEY (`agency_id`)
    REFERENCES `apside_road`.`agency` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `apside_road`.`technologie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`technologie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `picture` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `apside_road`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `apside_road`.`project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `is_finished` TINYINT NOT NULL,
  `methode` VARCHAR(255) NOT NULL,
  `dateCreated` DATE NULL,
  `dateEnd` DATE NULL,
  `customer_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_project_customer_idx` (`customer_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_customer`
    FOREIGN KEY (`customer_id`)
    REFERENCES `apside_road`.`customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `apside_road`.`user_has_project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`user_has_project` (
  `user_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `project_id`),
  INDEX `fk_user_has_project_project1_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_user_has_project_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_project_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `apside_road`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_project_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `apside_road`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `apside_road`.`user_has_technologie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`user_has_technologie` (
  `user_id` INT NOT NULL,
  `technologie_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `technologie_id`),
  INDEX `fk_user_has_technologie_technologie1_idx` (`technologie_id` ASC) VISIBLE,
  INDEX `fk_user_has_technologie_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_technologie_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `apside_road`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_technologie_technologie1`
    FOREIGN KEY (`technologie_id`)
    REFERENCES `apside_road`.`technologie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `apside_road`.`technologie_has_project`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `apside_road`.`technologie_has_project` (
  `technologie_id` INT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`technologie_id`, `project_id`),
  INDEX `fk_technologie_has_project_project1_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_technologie_has_project_technologie1_idx` (`technologie_id` ASC) VISIBLE,
  CONSTRAINT `fk_technologie_has_project_technologie1`
    FOREIGN KEY (`technologie_id`)
    REFERENCES `apside_road`.`technologie` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_technologie_has_project_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `apside_road`.`project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;