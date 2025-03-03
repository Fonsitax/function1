function calculateTotalPrice(itemCost =[], tax) {
    const total = itemCost.reduce((sum, price) => sum + price, 0)
    return total + total * tax; 
}

console.log(calculateTotalPrice([100, 200, 50], 0.1));