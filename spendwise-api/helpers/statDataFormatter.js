function statDataFormatter() {
    this.statData = [];
    this.incomeLabels = [];
    this.incomeValues = [];
    this.expenseLables = [];
    this.expenseValues = [];
    this.formatData = function (incomeArray, expenseArray) {

        incomeArray.map((row) => {
            incomeLabels.push(row.category);
            incomeValues.push(row.Amount)
        });

        expenseArray.map((row) => {
            expenseLables.push(row.category);
            expenseValues.push(row.Amount)
        });
        statData.push(incomeLabels)
        statData.push(incomeValues)
        statData.push(expenseLables)
        statData.push(expenseValues)
    };

    return this.statData;

}
module.exports = new statDataFormatter();