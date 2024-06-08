function cakes(recipe, available) {
  let minCakes = Infinity; 

 
  for (let ingredient in recipe) {
    if (available[ingredient]) {
      // Calculate how many cakes can be made with the available ingredient
      let possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
      
      if (possibleCakes < minCakes) {
        minCakes = possibleCakes;
      }
    } else {
      
      return 0;
    }
  }
  return minCakes;
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // 2
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 200, oil: 300})); // 0

