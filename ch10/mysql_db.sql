USE `mean`;
CREATE TABLE `presidents` (
`id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
`name` VARCHAR(100) NOT NULL,
`terms` INT UNSIGNED NOT NULL DEFAULT 1,
PRIMARY KEY(`id`)
);
INSERT INTO `presidents` (`name`, `terms`) VALUES
('Bill Clinton', 2),
('George W Bush', 2),
('Donald Trump', 1);