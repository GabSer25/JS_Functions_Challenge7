// Task 1: Customer Invoice Calculation

// Function to calculate the total invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}

// Test cases
console.log(calculateInvoice(100, 0.08, 5)); // Expected: "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // Expected: "Total Invoice: $530.00"

// Task 2: Employee Hourly Wage Calculation

// Function expression to calculate hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Test cases
console.log(calculateHourlyWage(52000, 40)); // Expected: "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // Expected: "Hourly Wage: $41.21"
