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
        },

        pepperoni={
            small:100,
            medium:150,
            large:200,
        },

        mushroom={
            small:80,
            medium:120,
            large:150,
        },

        chicken={
            small:150,
            medium:200,
            large:250,
        },
    },
];

// Start Calculator
function getSizePrice(size){
    if (size === 'small'){
        return pricePerSize.small * 1;
    }
    else if(size === 'medium'){
        return pricePerSize.medium * 1;
    }

    else {
        return pricePerSize.large * 1;
    }
}

