 
 //KRA Tax Brackets(PAYE rates in effect from 1 July 2023)
 const kraTaxBrackets = [
    {minSalary: 0, maxSalary: 24,000, taxRate: 0.1},
    {minSalary: 24,001, maxSalary: 32,333, taxRate: 0.25},
    {minSalary: 32,334, maxSalary: 500,000, taxRate: 0.3},
    {minSalary: 500,001, maxSalary: 800,000, taxRate: 0.325},
    {Above 800,000, taxRate: 0.35},
 ];

 //KRA Tax Brackets(PAYE rates in effect from 1 January 2021 up to 30 June 2023)
 const kraTaxBrackets = [
    {minSalary: 0, maxSalary: 24,000, taxRate: 0.1},
    {minSalary: 24,001, maxSalary: 32,333, taxRate:0.25},
    {Above 32,333, taxRate:0.3},
 ];

 //NHIF deductions Rates in effect from 1 April 2015
    const nhifDeductionRates = [
        {minGrossPay: 0, maxGrossPay:  5,999, deduction: 150},
        {minGrossPay: 6,000, maxGrossPay: 7,999, deduction: 300},
        {minGrossPay: 8,000, maxGrossPay: 11,999, deduction: 400},
        {minGrossPay: 12,000, maxGrossPay: 14,999, deduction: 500},
        {minGrossPay: 15,000, maxGrossPay: 19,999, deduction: 600},
        {minGrossPay: 20,000, maxGrossPay: 24,999, deduction: 750},
        {minGrossPay: 25,000, maxGrossPay: 29,999, deduction: 850},
        {minGrossPay: 30,000, maxGrossPay: 34,999, deduction: 900},
        {minGrossPay: 35,000, maxGrossPay: 39,999, deduction: 950},
        {minGrossPay: 40,000, maxGrossPay: 44,999, deduction: 1,000},
        {minGrossPay, 45,000, maxGrossPay: 49,999, deduction: 1,100},
        {minGrossPay: 50,000, maxGrossPay: 59,999, deduction: 1,200},
        {minGrossPay: 60,000, maxGrossPay: 69,999, deduction: 1,300},
        {minGrossPay: 70,000, maxGrossPay: 79,999, deduction: 1,400},
        {minGrossPay: 80,000, maxGrossPay: 89,999, deduction: 1,500},
        {minGrossPay: 90,000, maxGrossPay: 99,999, deduction: 1,600},
        {minGrossPay: 100,000 and above: deduction: 1,700},
     ];
     
 //NSSF Tiers
 const nssfRate = 0.06;  //6% of basic salary is deducted in Tier 1 and Tier 2

 function calculateNetSalary(basicSalary, benefits) {
    //Calculate  gross salary
    const grossSalary = basicSalary + benefits;

    //Calculate PAYE (tax)
    let payee = 0;
    for (const bracket of kraTaxBrackets) {
        if (grossSalary <= bracket.maxSalary) {
            payee = (grossSalary - bracket.minSalary) *bracket.taxRate;
            break;  //Once the appropriate tax bracket is found,exit the loop
        }
    }

    //Calculate NHIF deduction
    let nhifDeduction = 0;
    for (const grossPay of nhifDeductionRates) {
        if (grossSalary <= maxGrossPay) {
            nhifDeduction = nhifDeductionRates.deduction;
            break ;  //Exit loop once the appropriate NHIF deduction is found
        }
    }

    //Calculate NSSF deduction
    const nssfDeduction = basicSalary * nssfRate;


    //Calculate net salary
    const netSalary = grossSalary -payee -nhifDeduction - nssfDeduction;


    //Results
    console.log("Gross Salary:", grossSalary);
    console.log("PAYE (Tax):", payee);
    console.log("NHIF Deduction:", nhifDeduction);
    console.log("NSSF Deduction:", nssfDeduction);
    console.log("Net Salary:", netSalary);

 }

 //Get user input for basic salary and benefits
 let basicSalary = parseInt(prompt("Enter basic salary:"));
 let benefits = parseInt(prompt("Enter benefits:"));
 
 //Calculate and display net salary
 calculateNetSalary(basicSalary, benefits);

 
 