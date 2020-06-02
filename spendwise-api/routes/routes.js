const express = require('express');
const router = express.Router();

var expenseManager = require('../controller/Controller.expenseManagement');

router.post('/todaysexpenses', expenseManager.fetchTodaysExpensesByUserId);
router.post('/addTransaction', expenseManager.addTransactionByUserId);

module.exports = router;