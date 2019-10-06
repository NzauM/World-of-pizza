function Pizza(size,crust){
    this.size = pizzaSize;
    this.crust = pizzaCrut;
    this.toppings = [];
};

function Delivery(name,location){
    this.name = name;
    this.location = deliveryLOcation;
};

var pricePerSize = {
    small: 650,
    medium: 800,
    large:1000,
};

var pricePerCrust = {
    crispy: 150,
    stuffed:200,
    gluttenFree:200,
},

var toppingsperSize = [
    {
        pineapple={
            small:50,
            medium:100,
            large:150,
        }
    }
]