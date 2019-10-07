function Pizza(size,crust){
    this.size = size;
    this.crust = crust;
    this.toppings = [];
};

function deliver(location){
    this.location = location;
}

var pricePerSize = {
    small: 650,
    medium: 800,
    large:1000,
};

var pricePerCrust = {
    crispy: 150,
    stuffed:200,
    gluttenFree:200,
};


var toppingsperSize = [
    {
        pineapple: {
            small:50,
            medium:100,
            large:150,
        },
        pepperoni: {
            small:100,
            medium:150,
            large:200,
        },

        mushroom: {
            small:80,
            medium:120,
            large:150,
        },

        chicken: {
            small:150,
            medium:200,
            large:250,
        },
    },
];

// Start Calculator
function getSizePrice(pizzaSize){
    if ( pizzaSize === 'small'){
        return pricePerSize.small * 1;
    }
    else if(pizzaSize === 'medium'){
        return pricePerSize.medium * 1;
    }

    else {
        return pricePerSize.large * 1;
    }
}

function getCrustPrice(pizzaCrust){
    if( pizzaCrust === 'crispy'){
        return pricePerCrust.crispy * 1;
    }

    else if(pizzaCrust === 'stuffed'){
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

// For pizza size

function getSize(){
    return $("#sizes")
    .find (":selected")
    .val();
}

    // For the crust type

    function getCrust(){
        return $("#crusts")
        .find("#crusts:selected")
        .val();
    }

        // For toppings

        function getTopping(){
            var allToppings = [];
            $("#toppings :checked").each(function(){
                allToppings.push($(this).val());
            });
            return allToppings;
        }



$("document").ready(function(){
    
    $("form#order").submit(function(event){
        event.preventDefault();
        // alert(getToppingPrice(getTopping()));
        var sizeOfPizza = getSize();
        var crustOfPizza = getCrust();
        var allToppings = getTopping();

        var newPizza = new Pizza(sizeOfPizza,crustOfPizza);
        newPizza.toppings.push(allToppings);
        var order1 = getSizePrice(sizeOfPizza)+getCrustPrice(crustOfPizza)+getToppingPrice(allToppings);

        $("#appendOrder").append(
        " <tr>" +
         "<td>" +
        newPizza.size +
        "</td>" +
        "<td>" +
        newPizza.crust +
        "</td>" +
        "<td>" +
        newPizza.toppings +
        "</td>" +
        "<td>" +
        order1 +
        "</td>" +
        "</tr>"
        );
    });

    var total = parseInt($("#quantity").val());
    function getTotal(){
        var priceFirstPizza = getSizePrice(getSize())+
        getCrustPrice(getCrust())+
        getToppingPrice(getTopping());
        return priceFirstPizza;

    };

    var orderList = [];
    $("#submit").on("click",function(){
        total +=1;
        $("#quantity").text(total);
        orderList.push(getTotal());
        var totalPrice = 0;
        orderList.forEach(function(pizza){
            totalPrice += pizza;
        });
    });

    

    $("#delivery").click(function(){
        var location = prompt("Enter you delivery location");
        alert("Your pizza will be delivered at " + location + "Your delivery charge is 150");
    })

    $("#pickup").click(function(){
        alert("Your Pizza is ready for pickup.Welcome.")
    })

        
      });






      $("#delivery").click(function(){
          alert("Your delivery cost is ksh.200 .Please confirm delivery.")
      });