
// Task 1 Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;

}; // Created function to calculate profit

calculateProfit(20, 30, 100); // Expected Value $1000
calculateProfit(50, 70, 200); // Expected Value $4000

console.log("Total Profit: $", calculateProfit(20, 30, 100)); // Logging the result of the function
console.log("Total Profit: $", calculateProfit(50, 70, 200)); // Logging the result of the function