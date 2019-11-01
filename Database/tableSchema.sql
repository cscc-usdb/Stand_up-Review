CREATE TABLE `cscc_apps`.`reviews` (
  `idReview` INT NOT NULL AUTO_INCREMENT,
  `best_design_stand` VARCHAR(10) NOT NULL,
  `best_presentation_stand` VARCHAR(10) NOT NULL,
  `message` LONGTEXT NOT NULL,
  PRIMARY KEY (`idReview`),
  UNIQUE INDEX `idReviews_UNIQUE` (`idReview` ASC));

  