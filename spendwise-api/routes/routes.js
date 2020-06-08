const express = require('express');
const router = express.Router();

var expenseManager = require('../controller/Controller.expenseManagement');

router.get('/dailyexpenses?', expenseManager.fetchDailyExpenses);
router.post('/addTransaction', expenseManager.addTransaction);
router.post('/dailyexpensesummary', expenseManager.fetchDailyExpenseSummary);
router.post('/addBulkTransaction', expenseManager.addBulkTransaction);
router.delete('/deleteTransaction/:Id', expenseManager.deleteTransaction);
router.post('/transactionlist', expenseManager.fetchTransactionlist);
router.post('/categoryStat', expenseManager.fetchCategoryStat);
router.get('/listcategory', expenseManager.fetchCategory);
router.get('/listexpensetype', expenseManager.fetchExpenseType);


module.exports = router;