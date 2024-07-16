// In the fast-paced world of commerce, the ability to quickly and efficiently calculate discounts is vital. Picture managing an online store where prices and discounts are constantly changing. In such a scenario, automating discount calculations is not merely convenient but essential. This is where the power of JavaScript functions plays a crucial role.


function discountCalculator(price,discount){
    return price - ((price * discount) / 100);
}


console.log(discountCalculator(100,10));