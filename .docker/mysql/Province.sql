--
-- Table structure for table `Province`
--

DROP TABLE IF EXISTS `Province`;
/*!40101 SET @saved_cs_client = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Province`
(
    `id`         int(11) NOT NULL AUTO_INCREMENT,
    `country_id` int(11) NOT NULL,
    `name`       varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    PRIMARY KEY (`id`),
    KEY `country_id_index` (`country_id`)
) ENGINE = InnoDB
  AUTO_INCREMENT = 1
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

INSERT INTO `Province` (`id`, `country_id`, `name`)
VALUES (11, 1, 'ACEH'),
(12, 1, 'SUMATERA UTARA'),
(13, 1, 'SUMATERA BARAT'),
(14, 1, 'RIAU'),
(15, 1, 'JAMBI'),
(16, 1, 'SUMATERA SELATAN'),
(17, 1, 'BENGKULU'),
(18, 1, 'LAMPUNG'),
(19, 1, 'KEPULAUAN BANGKA BELITUNG'),
(21, 1, 'KEPULAUAN RIAU'),
(31, 1, 'DKI JAKARTA'),
(32, 1, 'JAWA BARAT'),
(33, 1, 'JAWA TENGAH'),
(34, 1, 'DI YOGYAKARTA'),
(35, 1, 'JAWA TIMUR'),
(36, 1, 'BANTEN'),
(51, 1, 'BALI'),
(52, 1, 'NUSA TENGGARA BARAT'),
(53, 1, 'NUSA TENGGARA TIMUR'),
(61, 1, 'KALIMANTAN BARAT'),
(62, 1, 'KALIMANTAN TENGAH'),
(63, 1, 'KALIMANTAN SELATAN'),
(64, 1, 'KALIMANTAN TIMUR'),
(65, 1, 'KALIMANTAN UTARA'),
(71, 1, 'SULAWESI UTARA'),
(72, 1, 'SULAWESI TENGAH'),
(73, 1, 'SULAWESI SELATAN'),
(74, 1, 'SULAWESI TENGGARA'),
(75, 1, 'GORONTALO'),
(76, 1, 'SULAWESI BARAT'),
(81, 1, 'MALUKU'),
(82, 1, 'MALUKU UTARA'),
(91, 1, 'PAPUA BARAT'),
(94, 1, 'PAPUA');