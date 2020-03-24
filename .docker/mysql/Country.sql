--
-- Table structure for table `Country`
--

DROP TABLE IF EXISTS `Country`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Country`
(
    `id`             int(11)    NOT NULL AUTO_INCREMENT,
    `name`           varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    `code`           varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    UNIQUE KEY `code_unique_index` (`code`),
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

INSERT INTO `Country` (`id`, `name`, `code`)
VALUES (1, 'Indonesia', 'ID');
