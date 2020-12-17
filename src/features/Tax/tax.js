const TAX_SLABS = require('./tax-slabs');

const taxCalculator = function(income, province, year) {
    const {FEDERAL_TAX_BRACKET, PROVICIAL_TAX_BRACKET} = TAX_SLABS[year];
    const provincialTaxSlab = PROVICIAL_TAX_BRACKET[province];
    let federalTax = 0, provincalTax = 0, i = 0;

    while(true) {
        if (income < FEDERAL_TAX_BRACKET[i][1]) {
            let diff = i == 0 ? income : income - FEDERAL_TAX_BRACKET[i-1][1];
            federalTax = (diff * (FEDERAL_TAX_BRACKET[i][0] / 100)) + FEDERAL_TAX_BRACKET[i][2];
            break;
        }
        i++;
    }
    i = 0;
    while(true) {
        if (income < provincialTaxSlab[i][1]) {
            let diff = i == 0 ? income : income - provincialTaxSlab[i-1][1];
            provincalTax = (diff * (provincialTaxSlab[i][0] / 100)) + provincialTaxSlab[i][2];
            break;
        }
        i++;
    }
    console.log('Fed = ', federalTax, ', Prov = ', provincalTax);
    return federalTax + provincalTax;
}

const DEDUCTIONS = {
    "RRSP" : 0.0,
    "OTHER_DEDUCTIONS": 0.0,
}

const TOTAL_INCOME = {
    "EMPLOYMENT_INCOME" : 0.0,
    "EI_BENEFITS": 0.0,
    "INTERESTS_INVESTMENT_INCOME": 0.0,
    "OTHERS": 0.0
}

const FEDERAL_TAX_CREDITS = {
    "BASIC_PERSONAL_AMOUNT": 12069,
    "AGE": 0,
    "SPOUSE": 4515,
    "CPP": 0,
    "EI" : 0,
    "EMPLOYMENT_INCOME": 1222,
    "OTHERS": 0.0
}


const PROVINCIAL_TAX_CREDITS = {
    "ON" : {
        "BASIC_PERSONAL_AMOUNT": 10582,
        "SPOUSE_BASE_AMOUNT": 9883,
        "SPOUSE_MAX_AMOUNT": 8985,
        "SPOUSE": 0,
        "OTHERS": 0
    }
}

const DONATIONS_GITS = {
    "DONATIONS": 0,
    "OTHERS" : 0
}

const FEDRAL_TAX_CREDIT_RATE = 15

const REFUNDS = {
    "CPP_OVERPAYMENT": 0,
    "CLIMATE_INCENTIVE": 0,
    "PROVINCIAL_TAX_CREDITS": 0,
    "OTHERS": 0
}

function findMyTax(totalIncome, deductions, ) {
    // Step 1: Information
    // Step 2: Total Income
    // Step 3: Net Income = Total Income - Deductions
    // Step 4: Taxable Income = Net Income - Other Deductions
    // Step 5: Fedreal Tax
    // Step 6: Fedral Non refundable tax credits = (FEDRAL_TAX_RATE% of Total of all Tax_credits) + DONATIONS
    // Step 7: Net Federal Tax = Federal Tax - Non refundable tax credit
    // Step 8: Provincial Non refundable Tax credits =
    // Step 8: Net Provincial Tax =
    // Step 9: Total Tax payable = Net Federal Tax + Net Provincial Tax
    // Step 10: Refund / Balance Owing = Total Tax payable - (Total Income Tax deducted + REFUNDS)
}

// console.log(taxCalculator(100000, 'ON', 2019));
// console.log(taxCalculator(87925, 'ON', 2018));
// console.log(taxCalculator(102005, 'ON', 2019));
console.log(taxCalculator(90982.70, 'ON', 2019));