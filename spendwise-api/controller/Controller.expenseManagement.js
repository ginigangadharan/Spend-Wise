var expenseManagementServices = require('../service/Service.expenseManagement');
var valueChecker = require('../helpers/valueChecker');

let expenseManagementContoller = {
    fetchTodaysExpensesByUserId(req, res, next) {
        if (valueChecker.checkObject({
            date: req.body.searchDate,
            userId: req.body.userID
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
    addTransactionByUserId(req, res, next) {
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
    }
};
module.exports = expenseManagementContoller;