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

// Task 3: Customer Loyalty Discount

// Arrow function to calculate loyalty discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Test cases
console.log(calculateLoyaltyDiscount(100, 6)); // Expected: "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // Expected: "Discounted Price: $190.00"

// Task 4: Product Shipping Cost Calculation

// Function to calculate shipping cost based on weight, location, and expedited option
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}

// Test cases
console.log(calculateShippingCost(10, "USA", true)); // Expected: "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // Expected: "Shipping Cost: $13.50"

// Task 5: Business Loan Interest Calculation

// Function to calculate total loan interest
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Test cases
console.log(calculateLoanInterest(1000, 0.05, 3)); // Expected: "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // Expected: "Total Interest: $1750.00"

// Task 6: Filtering High-Value Transactions

// Array of transactions
let transactions = [500, 1200, 3000, 800, 2200];

// Higher-order function to filter transactions above $1000
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Test case
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); 
// Expected output: [1200, 3000, 2200]

// Task 7: Budget Tracker

// Function that returns another function to track budget
function createBudgetTracker() {
    let balance = 0;
    
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${Math.abs(balance)}`;
    };
}

// Test case
let budget = createBudgetTracker();
console.log(budget(300)); // Expected: "Current Balance: -$300"
console.log(budget(200)); // Expected: "Current Balance: -$500"
