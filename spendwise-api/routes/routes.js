const express = require('express');
const router = express.Router();

var expenseManager = require('../controller/Controller.expenseManagement');

router.get('/dailyexpenses?', expenseManager.fetchDailyExpenses);
router.post('/todaysexpenses', expenseManager.fetchTodaysExpensesByUserId);
router.post('/addTransaction', expenseManager.addTransactionByUserId);
router.post('/dailyexpensesummary', expenseManager.fetchDailyExpenseSummary);

module.exports = router;