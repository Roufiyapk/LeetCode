/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b)

    const cost=prices[0]+prices[1]

    if(cost<=money){
        return money-cost
    }else{
        return money
    }


};