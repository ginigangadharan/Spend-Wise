var expenseManagementServices = require('../service/Service.expenseManagement');
var valueChecker = require('../helpers/valueChecker');
var dataFormatter = require('../helpers/statDataFormatter');

let expenseManagementContoller = {
    fetchDailyExpenses(req, res) {
        if (valueChecker.checkObject({
            searchDate: req.query.searchDate,
            page: req.query.page
        }) !== true) {
            return res.status(500).json({ error: valueChecker.errorMessage });
        }
        expenseManagementServices.handlefetchDailyExpenses(req.query).then(result => {
            var data = {
                "page": parseInt(req.query.page),
                "per_page": result[1][0].per_page,
                "total": result[1][0].total,
                "total_pages": result[1][0].total_pages,
                "result": result[0]
            }
            return res.status(200).json(data);
        }).catch(error => {
            return res.status(500).json(error);
        })
    },
    fetchTodaysExpensesByUserId(req, res) {
        if (valueChecker.checkObject({
            searchDate: req.body.searchDate,
            userID: req.body.userID
        }) !== true) {
            return res.status(500).json({ error: valueChecker.errorMessage });
        }
        expenseManagementServices.handlefetchTodaysExpensesByUserId(req.body).then(result => {
            var data = {
                "result": result[0]
            }
            return res.status(200).json(data);
        }).catch(error => {
            return res.status(500).json(error);
        })
    },
    addTransactionByUserId(req, res) {
        if (valueChecker.checkObject({
            categoryId: req.body.categoryId,
            description: req.body.description,
            amount: req.body.amount,
            expenseType: req.body.expenseType,
            transactionDate: req.body.transactionDate,
            createdBy: req.body.createdBy,
            modifiedBy: req.body.modifiedBy
        }) !== true) {
            return res.status(500).json({ error: valueChecker.errorMessage });
        }
        expenseManagementServices.handleaddTransactionByUserId(req.body).then(result => {
            var data = {
                "result": result[0]
            }
            return res.status(200).json(data);
        }).catch(error => {
            return res.status(500).json(error);
        })
    },
    fetchDailyExpenseSummary(req, res) {
        if (valueChecker.checkObject({
            searchDate: req.body.searchDate
        }) !== true) {
            return res.status(500).json({ error: valueChecker.errorMessage });
        }
        expenseManagementServices.handlefetchDailyExpenseSummary(req.body).then(result => {
            var data = {
                "result": result[0]
            }
            return res.status(200).json(data);
        }).catch(error => {
            return res.status(500).json(error);
        })
    },
    addBulkTransaction(req, res) {
        let payload = req.body;
        if (Array.isArray(payload) && (payload.length > 0)) {
            expenseManagementServices.handleaddBulkTransaction(payload).then(result => {
                var data = {
                    "result": result.insertId
                }
                return res.status(200).json(data);
            }).catch(error => {
                return res.status(500).json(error);
            })
        } else {
            return res.status(500).json({ error: "Invalid Input!" });
        }
    },
    deleteTransaction(req, res) {
        if (parseInt(req.params.Id) < 1) {
            return res.status(500).json({ error: "Invalid Input!" });
        }
        expenseManagementServices.handleDeleteTransaction(req.params.Id).then(result => {
            var data = {
                "result": result[0]
            }
            return res.status(200).json(data);
        }).catch(error => {
            return res.status(500).json(error);
        })
    },
    transactionlist(req, res) {
        if (valueChecker.checkObject({
            startDate: req.body.startDate,
            endDate: req.body.endDate
        }) !== true) {
            return res.status(500).json({ error: valueChecker.errorMessage });
        }
        expenseManagementServices.handleGetTransactionListByDateRange(req.body).then(result => {
            var data = {
                "result": result[0]
            }
            return res.status(200).json(data);
        }).catch(error => {
            return res.status(500).json(error);
        })
    },
    fetchCategoryStat(req, res) {
        if (valueChecker.checkObject({
            startDate: req.body.startDate,
            endDate: req.body.endDate
        }) !== true) {
            return res.status(500).json({ error: valueChecker.errorMessage });
        }
        expenseManagementServices.handleGetCategoryStat(req.body).then(result => {
            // let formattedResult = dataFormatter.formatData(result[0], result[1]);
            var data = {
                "result": {
                    "incomeData": result[0],
                    "expenseData": result[1]
                }
            }
            return res.status(200).json(data);
        }).catch(error => {
            return res.status(500).json(error);
        })
    }
};
module.exports = expenseManagementContoller;