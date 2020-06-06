const express = require('express');
const router = express.Router();

var expenseManager = require('../controller/Controller.expenseManagement');

router.get('/dailyexpenses?', expenseManager.fetchDailyExpenses);
router.post('/todaysexpenses', expenseManager.fetchTodaysExpensesByUserId);
router.post('/addTransaction', expenseManager.addTransactionByUserId);
router.post('/dailyexpensesummary', expenseManager.fetchDailyExpenseSummary);
router.post('/addBulkTransaction', expenseManager.addBulkTransaction);
router.delete('/deleteTransaction/:Id', expenseManager.deleteTransaction);


module.exports = router;