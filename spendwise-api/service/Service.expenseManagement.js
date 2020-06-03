var db = require('../db/dbConnection');

var expenseManagementService = {
    handlefetchTodaysExpensesByUserId: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_FetchTodaysExpensesByUserId(?,?)', [data.searchDate, data.userID], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handlefetchTodaysExpensesByUserId : " + e);
        }
    },
    handleaddTransactionByUserId: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_AddTransactionByUserId(?,?,?,?,?,?,?)', [data.categoryId, data.description, data.amount, data.expenseType, data.transactionDate, data.createdBy, data.modifiedBy], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handleaddTransactionByUserId : " + e);
        }
    },
    handlefetchDailyExpenseSummary: function (data) {
        try {
            return new Promise((resolve, reject) => {
                db.query('CALL SP_FetchDailyExpenseSummary(?)', [data.searchDate], (error, rows) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                });
            });
        } catch (e) {
            console.log("Error in handlefetchDailyExpenseSummary : " + e);
        }
    }
};
module.exports = expenseManagementService;