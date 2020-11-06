//Describe: Pizza()
//test: "It should create an order of pizza with toppings and size"
//code: let pizzaOrder = new Pizza(topping, size);
//Expect: pizzaOrder("peperonni", "small");

function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.pizza = [];
  this.price = 0;
}

//cost(pizza)
// if toppings === "pepperoni" and size === "small"
//  this.price = 15;
// this.pizza.push(pizza)
// else if toppings === "pepperoni" and size === "large"
// this.price = 20

  Pizza.prototype.cost = function() {
    if (this.toppings === "pepperoni" && this.toppings === "small")
    this.price = 15;
    this.pizza.push(pizza);
  }
