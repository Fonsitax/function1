function CalculateTotalSalary(hourlyRate, hoursWorked) {
    let totalSalary = hourlyRate * hoursWorked;
    let bonus = 0;

    if (hoursWorked > 40) {
        bonus = totalSalary * 0.05;
        totalSalary += bonus;
    } 
    return `Salary based on ${hoursWorked} hours: $${totalSalary}`;  
    }
console.log(CalculateTotalSalary(45,20));
console.log(CalculateTotalSalary(12,20));
console.log(CalculateTotalSalary(25,40));
console.log(CalculateTotalSalary(25,45));
