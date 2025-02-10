
// Task 1 Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;

}; // Created function to calculate profit

calculateProfit(20, 30, 100); // Expected Value $1000
calculateProfit(50, 70, 200); // Expected Value $4000

console.log("Total Profit: $", calculateProfit(20, 30, 100)); // Logging the result of the function
console.log("Total Profit: $", calculateProfit(50, 70, 200)); // Logging the result of the function
// Task 2 Function Expression

let calculateSalesTax = function(amount, taxRate) {
    let salesTax =Math.floor(amount * taxRate);
    return salesTax;
}; // Created a function to calculate sales tax

console.log("Sales Tax: $", calculateSalesTax(100, 0.07)); // logging of sale for $100 with sales tax of 7% in console
console.log("Sales Tax: $", calculateSalesTax(500, 0.1)); // logging of sale for $500 with sales tax of 10% in conole
