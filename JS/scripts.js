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

function getCrustPrice(crust){
    if(crust === 'crispy'){
        return pricePerCrust.crispy * 1;
    }

    else if(crust === 'stuffed'){
        return pricePerCrust.stuffed * 1;
    }

    else{
        return pricePerCrust.gluttenFree * 1;
    }
}

function getToppingPrice(toppings){
    var totalToppings = 0;
    for(i=0; i< toppings.length; i++){
        if(toppings[i] == 'pineapple'){
            totalToppings += 100;
        }

        if(toppings[i] == 'pepperoni'){
            totalToppings += 150;
        }

        if(toppings[i] == 'mushrooms'){
            totalToppings +=120;
        }

        if(toppings[i] == 'chicken'){
            totalToppings +=200;
        }
    }

    return totalToppings * 1;
}


// User interface logic

$("document").ready(function(){
    // For pizza size

    function getSize(){
        return $("pizza-size")
        .find (":selected")
        .val();
    }

    // For the crust type

    function getCrust(){
        return $("crust-type")
        .find(":selscted")
        .val();
    }
})