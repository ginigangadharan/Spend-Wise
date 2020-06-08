DROP TABLE IF EXISTS tbl_category;
CREATE TABLE tbl_category
(
  Id int
(11) NOT NULL AUTO_INCREMENT,
  Category varchar
(45) NOT NULL,
  PRIMARY KEY
(Id)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table tbl_category
--

LOCK TABLES tbl_category WRITE;
INSERT INTO 
tbl_category
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
UNLOCK TABLES;

--
-- Table structure for table tbl_expenseType
--

DROP TABLE IF EXISTS tbl_expenseType;
CREATE TABLE tbl_expenseType
(
  Id int
(11) NOT NULL AUTO_INCREMENT,
  expenseType varchar
(45) NOT NULL,
  PRIMARY KEY
(Id)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table tbl_expenseType
--

LOCK TABLES tbl_expenseType WRITE;
INSERT INTO 
tbl_expenseType
VALUES
    (1, 'Earnings'),
    (2, 'Payment');
UNLOCK TABLES;

--
-- Table structure for table tbl_expenses
--

DROP TABLE IF EXISTS tbl_expenses;
CREATE TABLE tbl_expenses
(
  Id int
(11) NOT NULL AUTO_INCREMENT,
  CategoryId int
(11) NOT NULL,
  Description text NOT NULL,
  Amount int
(11) NOT NULL,
  ExpenseType int
(11) NOT NULL,
  DateofEntry date NOT NULL,
  Createdon timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  Modifiedon timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY
(Id)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;



LOCK TABLES tbl_expenses WRITE;
INSERT INTO 
tbl_expenses
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
UNLOCK TABLES;


CREATE DEFINER=mysqldev@% PROCEDURE SP_AddTransaction
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

END 

CREATE DEFINER=mysqldev@% PROCEDURE SP_DeleteTransaction
(
IN expenseId INT
)
BEGIN

    DELETE FROM tbl_expenses WHERE Id = expenseId;

    SELECT COUNT(*)
    FROM tbl_expenses
    WHERE Id = expenseId;

END

CREATE DEFINER=mysqldev@% PROCEDURE SP_FetchAllCategories
()
BEGIN

    SELECT
        Id, Category
    FROM
        tbl_category;

END

CREATE DEFINER=mysqldev@% PROCEDURE SP_FetchAllExpenseTypes
()
BEGIN

    SELECT
        Id, expenseType
    FROM
        tbl_expenseType;

END

CREATE DEFINER=mysqldev@% PROCEDURE SP_FetchCategoryStat
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


END 

CREATE DEFINER=mysqldev@% PROCEDURE SP_FetchDailyExpenses
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

END 

CREATE DEFINER=mysqldev@% PROCEDURE SP_FetchDailyExpenseSummary
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

END 

CREATE DEFINER=mysqldev@% PROCEDURE SP_FetchTransactionDetails
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
