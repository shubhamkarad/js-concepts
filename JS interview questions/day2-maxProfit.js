// Find the max profit from an array - [7,1,5,6,3,4] - output: 5

const maxProfit = (prices) => {
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < minStockPurchasePrice) {
            minStockPurchasePrice = prices[i];
        }
        profit = Math.max(profit, prices[i] - minStockPurchasePrice);
    }
    return profit;
}

const res = maxProfit([7,1,5,6,3,4]);
console.log(res);