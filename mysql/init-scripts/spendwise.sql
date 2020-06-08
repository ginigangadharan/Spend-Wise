/*
SQLyog Ultimate v8.55 
MySQL - 5.7.30-0ubuntu0.16.04.1 : Database - spendwise
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `tbl_category` */

DROP TABLE IF EXISTS `tbl_category`;

CREATE TABLE `tbl_category` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Category` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_category` */

insert  into `tbl_category`(`Id`,`Category`) values (1,'Housing'),(2,'Consumer Debt'),(3,'Transportation'),(4,'Personal Care'),(5,'Pets'),(6,'Taxes'),(7,'Giving'),(8,'Food'),(9,'Clothes'),(10,'Home Supplies'),(11,'Child Expenses'),(12,'Gifts'),(13,'Fun'),(14,'Healthcare'),(15,'Services/Memberships'),(16,'Insurance'),(17,'Income'),(18,'Utilities'),(19,'Savings'),(20,'Miscellaneous');

/*Table structure for table `tbl_expenseType` */

DROP TABLE IF EXISTS `tbl_expenseType`;

CREATE TABLE `tbl_expenseType` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseType` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_expenseType` */

insert  into `tbl_expenseType`(`Id`,`expenseType`) values (1,'Earnings'),(2,'Payment');

/*Table structure for table `tbl_expenses` */

DROP TABLE IF EXISTS `tbl_expenses`;

CREATE TABLE `tbl_expenses` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `CategoryId` int(11) NOT NULL,
  `Description` text NOT NULL,
  `Amount` int(11) NOT NULL,
  `ExpenseType` int(11) NOT NULL,
  `DateofEntry` date NOT NULL,
  `Createdon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Modifiedon` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

/*Data for the table `tbl_expenses` */

insert  into `tbl_expenses`(`Id`,`CategoryId`,`Description`,`Amount`,`ExpenseType`,`DateofEntry`,`Createdon`,`Modifiedon`) values (2,3,'Daily KTM charge',5,2,'2020-06-09','2020-06-08 05:12:16','2020-06-08 05:12:16'),(3,3,'Daily KTM charge',5,2,'2020-06-10','2020-06-08 05:12:16','2020-06-08 05:12:16'),(4,3,'Daily KTM charge',5,2,'2020-06-11','2020-06-08 05:12:16','2020-06-08 05:12:16'),(5,3,'Daily KTM charge',5,2,'2020-06-12','2020-06-08 05:12:16','2020-06-08 05:12:16'),(6,3,'Daily KTM charge',5,2,'2020-06-13','2020-06-08 05:12:16','2020-06-08 05:12:16'),(7,4,'Hair Cut',20,2,'2020-06-08','2020-06-08 05:16:18','2020-06-08 05:16:18'),(8,17,'Freelance project payment',500,1,'2020-06-08','2020-06-08 05:20:06','2020-06-08 05:20:06'),(9,8,'Dine out',30,2,'2020-06-08','2020-06-08 05:36:56','2020-06-08 05:36:56'),(10,9,'H&M',120,2,'2020-06-08','2020-06-08 05:37:24','2020-06-08 05:37:24'),(11,6,'Tax refund 2019',1200,1,'2020-06-08','2020-06-08 05:38:22','2020-06-08 05:38:22'),(12,12,'Birthday share',30,2,'2020-06-08','2020-06-08 05:39:08','2020-06-08 05:39:08'),(13,13,'Movie',15,2,'2020-06-08','2020-06-08 05:39:35','2020-06-08 05:39:35'),(14,10,'Lulu shopping',100,2,'2020-06-08','2020-06-08 05:40:00','2020-06-08 05:40:00'),(15,18,'TNB',50,2,'2020-06-08','2020-06-08 05:58:03','2020-06-08 05:58:03');

/* Procedure structure for procedure `SP_AddTransaction` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_AddTransaction` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_AddTransaction`(
IN categoryId INT,
IN description TEXT,
IN amount INT,
IN expensetype INT,
IN entrydate date
)
BEGIN

declare insertedId INT;

INSERT INTO tbl_expenses (CategoryId,Description,Amount,ExpenseType,DateofEntry) VALUES (categoryId,description,amount,expensetype,entrydate);

SELECT LAST_INSERT_ID() INTO insertedId;

SELECT 
    insertedId AS id, Description AS title
FROM
    tbl_expenses
WHERE
    id = insertedId;

END */$$
DELIMITER ;

/* Procedure structure for procedure `SP_DeleteTransaction` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_DeleteTransaction` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_DeleteTransaction`(
IN expenseId INT
)
BEGIN

DELETE FROM tbl_expenses WHERE Id = expenseId;

SELECT COUNT(*) FROM tbl_expenses WHERE Id = expenseId;

END */$$
DELIMITER ;

/* Procedure structure for procedure `SP_FetchAllCategories` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_FetchAllCategories` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchAllCategories`()
BEGIN

SELECT 
    Id, Category
FROM
    tbl_category;

END */$$
DELIMITER ;

/* Procedure structure for procedure `SP_FetchAllExpenseTypes` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_FetchAllExpenseTypes` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchAllExpenseTypes`()
BEGIN

SELECT 
    Id, expenseType
FROM
    tbl_expenseType;

END */$$
DELIMITER ;

/* Procedure structure for procedure `SP_FetchCategoryStat` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_FetchCategoryStat` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchCategoryStat`(
IN startDate DATE,
IN endDate DATE
)
BEGIN

DROP TEMPORARY TABLE IF EXISTS incomeSummary;

CREATE TEMPORARY TABLE incomeSummary(
	category TEXT,
	Amount FLOAT
);


DROP TEMPORARY TABLE IF EXISTS expenseSummary;

CREATE TEMPORARY TABLE expenseSummary(
	category TEXT,
	Amount FLOAT
);

INSERT INTO incomeSummary(category,Amount)
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


INSERT INTO expenseSummary(category,Amount)
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

SELECT * FROM incomeSummary;

SELECT * FROM expenseSummary;


END */$$
DELIMITER ;

/* Procedure structure for procedure `SP_FetchDailyExpenses` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_FetchDailyExpenses` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchDailyExpenses`(
IN expenseDate date,
IN pageCount INT
)
BEGIN

SET @expenseDate = expenseDate;

SET @page_no = pageCount;

SET @per_page = 4;

SET @total = (select count(*) from tbl_expenses where DateofEntry = expenseDate);

SET @total_pages = CEIL(@total / @per_page);

IF pageCount > 1 THEN

SET @page_offset = (pageCount - 1) * 4;

ELSEIF pageCount = 1 THEN

SET @page_offset = 0;

END IF;

PREPARE STMT FROM 'SELECT expenses.Id,expenses.Description,expenses.Amount,DATE_FORMAT(expenses.DateofEntry, \'%d-%M-%Y\') AS DateofEntry,category.Category,expenseType.expenseType FROM tbl_expenses expenses JOIN tbl_category category ON expenses.CategoryId = category.Id JOIN tbl_expenseType expenseType ON expenses.ExpenseType = expenseType.Id WHERE expenses.DateofEntry = ? order by Id LIMIT 4 OFFSET ?';

EXECUTE STMT USING @expenseDate,@page_offset;

DEALLOCATE PREPARE STMT;

SELECT @page_no AS 'page_no', @per_page AS 'per_page', @total AS 'total', CAST(@total_pages AS signed) AS 'total_pages';

END */$$
DELIMITER ;

/* Procedure structure for procedure `SP_FetchDailyExpenseSummary` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_FetchDailyExpenseSummary` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchDailyExpenseSummary`(
IN expenseDate date
)
BEGIN

DROP TEMPORARY TABLE IF EXISTS summary;

CREATE TEMPORARY TABLE summary(
	expenseType TEXT,
	Amount FLOAT
);

INSERT INTO summary(expenseType,Amount)
SELECT 
	'Income',
    SUM(Amount)
FROM
    tbl_expenses
WHERE
    ExpenseType = 1
    AND DateofEntry = expenseDate;
    
INSERT INTO summary(expenseType,Amount)    
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

END */$$
DELIMITER ;

/* Procedure structure for procedure `SP_FetchTransactionDetails` */

/*!50003 DROP PROCEDURE IF EXISTS  `SP_FetchTransactionDetails` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`mysqldev`@`%` PROCEDURE `SP_FetchTransactionDetails`(
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

END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
