const express = require('express');
const router = express.Router();

var expenseManager = require('../controller/Controller.expenseManagement');

router.get('/dailyexpenses?', expenseManager.fetchDailyExpenses);
router.post('/todaysexpenses', expenseManager.fetchTodaysExpensesByUserId);
router.post('/addTransaction', expenseManager.addTransactionByUserId);
router.post('/dailyexpensesummary', expenseManager.fetchDailyExpenseSummary);
router.post('/addBulkTransaction', expenseManager.addBulkTransaction);
router.delete('/deleteTransaction/:Id', expenseManager.deleteTransaction);
router.post('/transactionlist', expenseManager.transactionlist);
router.post('/categoryStat', expenseManager.fetchCategoryStat);
router.get('/listcategory', expenseManager.fetchCategory);
router.get('/listexpensetype', expenseManager.fetchExpenseType);


module.exports = router;