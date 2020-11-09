//Business Logic-------
function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
}

Pizza.prototype.cost = function() {
  if (this.toppings === "pepperoni" && this.size === "small" || this.toppings === "sausage" && this.size === "small") {
    return this.price += 15;
  } else if (this.toppings === "pepperoni" && this.size === "medium" || this.toppings === "sausage" && this.size === "medium") {
    return this.price += 20;
  } else if (this.toppings === "pepperoni" && this.size === "large" || this.toppings === "sausage" && this.size === "large") {
    return this.price += 25;
  } else if (this.toppings === "cheese" && this.size === "small") {
    return this.price += 10;
  } else if (this.toppings === "cheese" && this.size === "medium") {
    return this.price += 15;
  } else if (this.toppings === "cheese" && this.size === "large") {
    return this.price += 17;
  } else if (this.toppings === "veggies" && this.size === "small" || this.toppings === "secret-ingredients" && this.size === "small") {
    return this.price += 13;
  } else if (this.toppings === "veggies" && this.size === "medium" || this.toppings === "secret-ingredients" && this.size === "medium") {
    return this.price += 16;
  } else {
    return this.price += 21;
  }
}

// User Interface Logic---------

$(document).ready(function(){

  $("#deliveryPizza").click(function(){
    $("#address").toggle();
  });
  $("#menuBanner").click(function() {
    $("#menu").slideDown();
    });
  $("#orderBanner").click(function() {
    $("#pizza").slideDown();
  });
  
  
  $("#pizza").submit(function(event) {
    event.preventDefault();
    
    const userToppings = $("#toppings").val();
    const userSize = $("#size").val();
    const delivery = $("input:checkbox[name=delivery]:checked").val();
    
    function deliveryPizza() {
      if (delivery) {
        return pizza.price += 7
      }
    }

    let pizza = new Pizza(userToppings, userSize);
    pizza.cost();
    deliveryPizza();
  $("#orderCompleted").show();
  $("#information").text(`Your ${userSize} pizza with ${userToppings} has been ordered your total is $${pizza.price}`)
  });
});