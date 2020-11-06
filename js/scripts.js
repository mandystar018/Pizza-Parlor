//Business Logic-------
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.cost = function() {
  if (this.toppings === "pepperoni" && this.size === "small") {
    return this.price += 15;
  } else if (this.toppings === "pepperoni" && this.size === "large") {
    return this.price += 20;
  } else if (this.toppings === "cheese" && this.size === "small") {
    return this.price += 10;
  } else if (this.toppings === "cheese" && this.size === "large") {
    return this.price += 17;
  } else {
    return "Enter a topping and size"
  }
}

// User Interface Logic---------

$(document).ready(function(){
  $().submit(function(event) {
    event.preventDefault();
  });
});