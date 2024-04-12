// You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order. 

function sortProducts(products){
  return  products.sort((a, b) => a.price - b.price);
}

let products = [
    {name:"rice", price : 1500},
    {name:"potatoes", price: 2500},
    {name:"cabbages", price: 1000},
    {name:"meat", price: 2000}

]

console.log(sortProducts(products));