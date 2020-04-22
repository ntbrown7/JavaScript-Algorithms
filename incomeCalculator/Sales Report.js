//function costEval by inputing the item sold and quantity you can 
//calculate the cost and net gain of any of the items. 


function costEval(item, quantity){
  
    saleItems = 
    [
        ["Brown Sugar Milk",    6.00],
        ["Coffee Milk",         7.00],
        ["Matcha Milk",         7.00],
        ["Green Tea Lemonade",  6.00],
        ["Strawberry Mango",    7.00],
        
        ["SC Boba",             0.50],
        ["SC Basil Seeds",      0.50]
    ];

    costItems =
    [
        ["Brown Sugar"      ,   0.5190],       //0
        ["non-dairy creamer",   0.1590],       //1
        ["coffee",              0.1488],       //2
        ["matcha powder",       0.0699],        //3
        ["lemon syrup",         0.1850],        //4
        ["mango syrup",         0.1108],        //5
        ["Strawberries",        0.1500],        //6
        ["Ice",                 0.1500],        //7
        ["Bags",                0.4000],        //8
        ["Straws",              0.0968],        //9
        ["Shipping", 74.9]              //8
    ];

    ice = costItems[7][1]; 
    plastic = costItems[8][1] + costItems[9][1];

    profit = ingredientCost(item,quantity);
    
          


    return profit;

}
function ingredientCost(x, quantity){
     
    switch(x) {
        case 1: //Brown Sugar Milk  // Brown Sugar + Non-Dairy
            itIn = 0;
            ingCost  = (costItems[0][1] + costItems[1][1]);
            itemName = saleItems[0][0];
          break;
        case 2: //Coffee Milk       // Coffee + Non-dairy 
            itIn = 1;
            ingCost  = (costItems[2][1] + costItems[1][1]);
            
          break;
        case 3: //Matcha Milk       // Matcha Powder + Non-dairy
            itIn = 2;
            ingCost = (costItems[3][1] + costItems[1][1]);
          break;
        case 4://Green Tea Lemonade // Lemon Syrup + Green Tea Leaves;
            itIn = 3;
            ingCost = (costItems[4][1] + 0);
          break;
        case 5://Strawberry Mango   // Mango Syrup + 
            itIn = 4;
            ingCost = (costItems[5][1] + costItems[6][1] + 0);
            break;

        default:
            console.log("Invalid Ingredient Key");
      }

      itemName = saleItems[itIn][0]; sale = saleItems[itIn][1];
      cost = ingCost + ice + plastic;
      totalCost = cost * quantity;
      totalProfit = (sale - cost) * quantity

      return quantity + " " + itemName + " sold = \n\n Total Cost: " + totalCost + "\n Net Profit: " + totalProfit + "\n\n\n";

}

console.log(costEval(1,50));console.log(costEval(2,50));console.log(costEval(3,50));console.log(costEval(4,50));console.log(costEval(5,50));

//1 Brown sugar Milk    4.67 
//2 Coffee Milk        6.0454
//3 Matcha Milk         6.124 
//4 Green Tea Lemonade  5.168
//5 Strawberry Mango    6.09