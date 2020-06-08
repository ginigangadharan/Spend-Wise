CREATE DATABASE
IF NOT EXISTS `spendwise` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `spendwise`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: xx.xxx.xxx.xx    Database: spendwise
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_category`
--

DROP TABLE IF EXISTS `tbl_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_category`
(
  `Id` int
(11) NOT NULL AUTO_INCREMENT,
  `Category` varchar
(45) NOT NULL,
  PRIMARY KEY
(`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_category`
--

LOCK TABLES `tbl_category` WRITE;
/*!40000 ALTER TABLE `tbl_category` DISABLE KEYS */;
INSERT INTO `
tbl_category`
VALUES
    (1, 'Housing'),
    (2, 'Consumer Debt'),
    (3, 'Transportation'),
    (4, 'Personal Care'),
    (5, 'Pets'),
    (6, 'Taxes'),
    (7, 'Giving'),
    (8, 'Food'),
    (9, 'Clothes'),
    (10, 'Home Supplies'),
    (11, 'Child Expenses'),
    (12, 'Gifts'),
    (13, 'Fun'),
    (14, 'Healthcare'),
    (15, 'Services/Memberships'),
    (16, 'Insurance'),
    (17, 'Income'),
    (18, 'Utilities'),
    (19, 'Savings'),
    (20, 'Miscellaneous');
/*!40000 ALTER TABLE `tbl_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_expenseType`
--

DROP TABLE IF EXISTS `tbl_expenseType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_expenseType`
(
  `Id` int
(11) NOT NULL AUTO_INCREMENT,
  `expenseType` varchar
(45) NOT NULL,
  PRIMARY KEY
(`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_expenseType`
--

LOCK TABLES `tbl_expenseType` WRITE;
/*!40000 ALTER TABLE `tbl_expenseType` DISABLE KEYS */;
INSERT INTO `
tbl_expenseType`
VALUES
    (1, 'Earnings'),
    (2, 'Payment');
/*!40000 ALTER TABLE `tbl_expenseType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_expenses`
--

DROP TABLE IF EXISTS `tbl_expenses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_expenses`
(
  `Id` int
(11) NOT NULL AUTO_INCREMENT,
  `CategoryId` int
(11) NOT NULL,
  `Description` text NOT NULL,
  `Amount` int
(11) NOT NULL,
  `ExpenseType` int
(11) NOT NULL,
  `DateofEntry` date NOT NULL,
  `Createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Modifiedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY
(`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_expenses`
--

LOCK TABLES `tbl_expenses` WRITE;
/*!40000 ALTER TABLE `tbl_expenses` DISABLE KEYS */;
INSERT INTO `
tbl_expenses`
VALUES
    (2, 3, 'Daily KTM charge', 5, 2, '2020-06-09', '2020-06-08 05:12:16', '2020-06-08 05:12:16'),
    (3, 3, 'Daily KTM charge', 5, 2, '2020-06-10', '2020-06-08 05:12:16', '2020-06-08 05:12:16'),
    (4, 3, 'Daily KTM charge', 5, 2, '2020-06-11', '2020-06-08 05:12:16', '2020-06-08 05:12:16'),
    (5, 3, 'Daily KTM charge', 5, 2, '2020-06-12', '2020-06-08 05:12:16', '2020-06-08 05:12:16'),
    (6, 3, 'Daily KTM charge', 5, 2, '2020-06-13', '2020-06-08 05:12:16', '2020-06-08 05:12:16'),
    (7, 4, 'Hair Cut', 20, 2, '2020-06-08', '2020-06-08 05:16:18', '2020-06-08 05:16:18'),
    (8, 17, 'Freelance project payment', 500, 1, '2020-06-08', '2020-06-08 05:20:06', '2020-06-08 05:20:06'),
    (9, 8, 'Dine out', 30, 2, '2020-06-08', '2020-06-08 05:36:56', '2020-06-08 05:36:56'),
    (10, 9, 'H&M', 120, 2, '2020-06-08', '2020-06-08 05:37:24', '2020-06-08 05:37:24'),
    (11, 6, 'Tax refund 2019', 1200, 1, '2020-06-08', '2020-06-08 05:38:22', '2020-06-08 05:38:22'),
    (12, 12, 'Birthday share', 30, 2, '2020-06-08', '2020-06-08 05:39:08', '2020-06-08 05:39:08'),
    (13, 13, 'Movie', 15, 2, '2020-06-08', '2020-06-08 05:39:35', '2020-06-08 05:39:35'),
    (14, 10, 'Lulu shopping', 100, 2, '2020-06-08', '2020-06-08 05:40:00', '2020-06-08 05:40:00'),
    (15, 18, 'TNB', 50, 2, '2020-06-08', '2020-06-08 05:58:03', '2020-06-08 05:58:03');
/*!40000 ALTER TABLE `tbl_expenses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'spendwise'
--
/*!50003 DROP PROCEDURE IF EXISTS `SP_AddTransaction` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_AddTransaction`
(
IN categoryId INT,
IN description TEXT,
IN amount INT,
IN expensetype INT,
IN entrydate date
)
BEGIN

    declare insertedId INT;

INSERT INTO tbl_expenses
    (CategoryId,Description,Amount,ExpenseType,DateofEntry)
VALUES
    (categoryId, description, amount, expensetype, entrydate);

SELECT LAST_INSERT_ID()
INTO insertedId;

SELECT
    insertedId AS id, Description AS title
FROM
    tbl_expenses
WHERE
    id = insertedId;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_DeleteTransaction` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_DeleteTransaction`
(
IN expenseId INT
)
BEGIN

    DELETE FROM tbl_expenses WHERE Id = expenseId;

    SELECT COUNT(*)
    FROM tbl_expenses
    WHERE Id = expenseId;

END
;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_FetchAllCategories` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchAllCategories`
()
BEGIN

    SELECT
        Id, Category
    FROM
        tbl_category;

END
;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_FetchAllExpenseTypes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchAllExpenseTypes`
()
BEGIN

    SELECT
        Id, expenseType
    FROM
        tbl_expenseType;

END
;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_FetchCategoryStat` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchCategoryStat`
(
IN startDate DATE,
IN endDate DATE
)
BEGIN

    DROP TEMPORARY TABLE
    IF EXISTS incomeSummary;

CREATE TEMPORARY TABLE incomeSummary
(
	category TEXT,
	Amount FLOAT
);


DROP TEMPORARY TABLE
IF EXISTS expenseSummary;

CREATE TEMPORARY TABLE expenseSummary
(
	category TEXT,
	Amount FLOAT
);

INSERT INTO incomeSummary
    (category,Amount)
SELECT
    category.Category, SUM(expenses.Amount)
FROM
    spendwise.tbl_expenses expenses
    JOIN
    spendwise.tbl_category category ON expenses.CategoryId = category.Id
WHERE
    expenses.ExpenseType = 1
    AND (DateofEntry BETWEEN startDate AND endDate)
GROUP BY expenses.CategoryId;


INSERT INTO expenseSummary
    (category,Amount)
SELECT
    category.Category, SUM(expenses.Amount)
FROM
    spendwise.tbl_expenses expenses
    JOIN
    spendwise.tbl_category category ON expenses.CategoryId = category.Id
WHERE
    expenses.ExpenseType = 2
    AND (DateofEntry BETWEEN startDate AND endDate)
GROUP BY expenses.CategoryId;

SELECT *
FROM incomeSummary;

SELECT *
FROM expenseSummary;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_FetchDailyExpenses` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchDailyExpenses`
(
IN expenseDate date,
IN pageCount INT
)
BEGIN

    SET @expenseDate = expenseDate;

    SET @page_no = pageCount;

    SET @per_page = 4;

    SET @total = (select count(*)
    from tbl_expenses
    where DateofEntry = expenseDate);

    SET @total_pages = CEIL(@total / @per_page);

    IF pageCount > 1 THEN

    SET @page_offset = (pageCount - 1) * 4;

    ELSEIF pageCount = 1 THEN

    SET @page_offset = 0;

END
IF;

PREPARE STMT FROM 'SELECT expenses.Id,expenses.Description,expenses.Amount,DATE_FORMAT(expenses.DateofEntry, \'%d-%M-%Y\') AS DateofEntry,category.Category,expenseType.expenseType FROM tbl_expenses expenses JOIN tbl_category category ON expenses.CategoryId = category.Id JOIN tbl_expenseType expenseType ON expenses.ExpenseType = expenseType.Id WHERE expenses.DateofEntry = ? order by Id LIMIT 4 OFFSET ?';

EXECUTE STMT USING
@expenseDate,@page_offset;

DEALLOCATE PREPARE STMT;

SELECT @page_no AS 'page_no', @per_page AS 'per_page', @total AS 'total', CAST(@total_pages AS signed) AS 'total_pages';

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_FetchDailyExpenseSummary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchDailyExpenseSummary`
(
IN expenseDate date
)
BEGIN

    DROP TEMPORARY TABLE
    IF EXISTS summary;

CREATE TEMPORARY TABLE summary
(
	expenseType TEXT,
	Amount FLOAT
);

INSERT INTO summary
    (expenseType,Amount)
SELECT
    'Income',
    SUM(Amount)
FROM
    tbl_expenses
WHERE
    ExpenseType = 1
    AND DateofEntry = expenseDate;

INSERT INTO summary
    (expenseType,Amount)
SELECT
    'Expense',
    SUM(Amount)
FROM
    tbl_expenses
WHERE
    ExpenseType = 2
    AND DateofEntry = expenseDate;

SELECT
    *
FROM
    summary;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `SP_FetchTransactionDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchTransactionDetails`
(
IN startDate DATE,
IN endDate DATE
)
BEGIN

    SELECT
        expenses.Id,
        expenses.Description,
        expenses.Amount,
        DATE_FORMAT(expenses.DateofEntry, '%d-%M-%Y') AS DateofEntry,
        category.Category,
        expenseType.expenseType
    FROM
        tbl_expenses expenses
        JOIN
        tbl_category category ON expenses.CategoryId = category.Id
        JOIN
        tbl_expenseType expenseType ON expenses.ExpenseType = expenseType.Id
    WHERE
    (DateofEntry BETWEEN startDate AND endDate)
    ORDER BY DateofEntry;

END
;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-08 14:21:03
