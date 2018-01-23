//Declarando variables
var boxFood = $(".container");

//haciendo la funcion para que aparezcan los tipos de restaurantes
function showRestaurants(){
  for (i = 0; i < data.length; i++) {
    boxFood.append('<div class="col-xs-5 box-food"><p class="name-restaurant">'+ data[i].name);
  }
}

showRestaurants();
