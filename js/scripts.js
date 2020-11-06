//Describe: Pizza()
//test: "It should create an order of pizza with toppings and size"
//code: let pizzaOrder = new Pizza(topping, size);
//Expect: pizzaOrder("peperonni", "small");


function Order(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

//cost(pizza)
// if toppings === "pepperoni" and size === "small"
//  this.price = 15;
// this.pizza.push(pizza)
// else if toppings === "pepperoni" and size === "large"
// this.price = 20

Order.prototype.cost = function() {
  let price = 0;
  if (this.toppings === "pepperoni" && this.toppings === "small") {
    return (price + 15);
  } else {
    return price;
  }
}
