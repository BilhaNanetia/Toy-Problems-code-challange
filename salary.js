 
 //Tax based on KRA tax rate
 function calculateTax(basicSalary) {
    if (basicSalary > 800,000) {
        return 0.35;
    } else if (basicSalary >= 500,001) {
        return 0.325;
    } else if (basicSalary >= 32,334) {
        return 0.3;
    } else if (basicSalary >=24,001) {
        return 0.25;
    } else {
        return 0.1;
    }
 }
    
 //NHIF deductions Rates 
 function calculateNHIF(basicSalary) {
    if (basicSalary <=5,999) {
      return 150;
    } else if (basicSalary <=7,999) {
      return 300;
    } else if (basicSalary <=11,999) {
      return 400;
    } else if (basicSalary <=14,999) {
      return 500;
    } else if (basicSalary < 30000) {
      return 600;
    } else {
      return 750;
    }
  }
        
     
 //NSSF contributions
 function calculateNSSF(basicSalary) {
    return 0.06 * basicSalary;
 }              //6% of basic salary is deducted from basic salary

    //Calculate  gross salary
    function calculateGrossSalary (basicSalary, benefits); {
       return basicSalary + benefits;
    }

    //Calculate net salary
  function calculateNetSalary(grossSalary, tax, nhif, nssf) {
    return grossSalary - tax - nhif - nssf;
  }

  // Example usage:
  const basicSalary = 20000;
  const benefits = 5000;
  const tax = calculateTax(basicSalary + benefits);
  const nhif = calculateNHIF(basicSalary);
  const nssf = calculateNSSF(basicSalary);
  const grossSalary = calculateGrossSalary(basicSalary, benefits);
  const netSalary = calculateNetSalary(grossSalary, tax, nhif, nssf);
  console.log(Gross salary: ${grossSalary});
  console.log(Tax: ${tax});
  console.log(NHIF deductions: ${nhif});
  console.log(NSSF deductions: ${nssf});
  console.log(Net salary: ${netSalary});




     

 
 