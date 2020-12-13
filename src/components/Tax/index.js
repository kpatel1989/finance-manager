/**
 * Input - Monthly Saving, Target Amount
 *
 */

let savingsAsOfToday = 10000;
let monthlySaving = 2500;
let targetAmount = 150000;
let targetDate = '08/31/2023';

function calculateTarget() {
    let totalMonths = (targetAmount - savingsAsOfToday) / monthlySaving;
    let targetDate = new Date((new Date()).setMonth((new Date()).getMonth() + totalMonths)).toString();
    console.log(targetDate);
}

function calculateMonthlySaving() {
    let d1 = new Date();
    let d2 = new Date(targetDate);
    let totalMonths;
    totalMonths = (d2.getFullYear() - d1.getFullYear()) * 12;
    totalMonths -= (d1.getMonth() + 1);
    totalMonths += d2.getMonth();
    let expectedMonthlySaving = ((targetAmount - savingsAsOfToday) / totalMonths).toFixed(2);
    console.log(expectedMonthlySaving);
}

calculateTarget();
calculateMonthlySaving();