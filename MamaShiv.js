function pizzas(pizzaName,details,small,medium,large)
{
    this.pizzaName = pizzaName;
    this.details = details;
    this.small = small;
    this.medium = medium;
    this.large = large;
    
}

var pizza1 = new pizzas("MARGHERITA","Pizza sauce and cheese","7.49","8.99","10.99");

var pizza2 = new pizzas("VEGETARIAN","Pineapple, onions, fresh peppers, mushrooms and sweetcorn","7.99","9.49","11.49");

var pizza3 = new pizzas("MEXICAN PASSION","Double jalapenos, onions, olives and herbs","7.99","9.49","11.49");
 
var pizza4 = new pizzas("MEAN AND GREEN","Spicy hot sauce base, onions, sweetcorn, green chillies and herbs","8.49","9.99","11.99");

var pizzaMenu = [];

pizzaMenu.push(pizza1);
pizzaMenu.push(pizza2);
pizzaMenu.push(pizza3);
pizzaMenu.push(pizza4);

var pizzaTag = ["p1","p2","p3","p4"];

var pDetailTag = ["p1d","p2d","p3d","p4d"];

var pSizeTag = ["p1size","p2size","p3size","p4size"];

for(var i = 0; i<pizzaMenu.length; i++)
    {
        document.getElementById(pizzaTag[i]).innerHTML= pizzaMenu[i].pizzaName;
        document.getElementById(pDetailTag[i]).innerHTML = pizzaMenu[i].details;
        document.getElementById(pSizeTag[i]).innerHTML = '<option>'+ "Small 9\" £" + pizzaMenu[i].small + '</option>' +
                                                            '<option>'+"Medium 12\" £" + pizzaMenu[i].medium + '</option>' +
                                                         '<option>'+ "Large 15\" £" + pizzaMenu[i].large + '</option>';
        
    }

//var buttonTag = ["ADD","ADD1","ADD2","ADD3"];

var cart = [];
 var j , price;
var Total =0;

var event = document.getElementById("ADD");
    event.addEventListener('click',function() { addtocart(0) } ,false);
    
var event1 = document.getElementById("ADD1")
    event1.addEventListener('click',function() { addtocart(1) },false)

var event2 = document.getElementById("ADD2")
    event2.addEventListener('click',function() { addtocart(2) },false)
    
var event3 = document.getElementById("ADD3")
    event3.addEventListener('click',function() { addtocart(3) },false)
    
function addtocart(j)
{
    var s = document.getElementById(pSizeTag[j]).selectedIndex;
   

    if(s == 0)
        {
            price = parseFloat(pizzaMenu[j].small);
    
            cart.push(pizzaMenu[j].pizzaName + pizzaMenu[j].small);
        }
    else if(s == 1)
        {
            price = parseFloat(pizzaMenu[j].medium);
          
            cart.push(pizzaMenu[j].pizzaName + pizzaMenu[j].medium);
        }
   else
       {
           price = parseFloat(pizzaMenu[j].large);
           
           cart.push(pizzaMenu[j].pizzaName + pizzaMenu[j].large);
       }
    
    Total = Total + price;
    document.getElementById("Cart").innerHTML = "£" + Total;
}


