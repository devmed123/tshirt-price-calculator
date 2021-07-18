
var products = {
    'white': {
        
        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg' 
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg' 
        }
    },
    
    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg' 
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png' 
        }
    }
}

var search_params = {
    "quantity": "10",
    "color": "colored",
    "quality": "Basic",
    "style": "printed",
}
excut();
$("#white").click(function () { 
        $("#white").css("background-color","#428CB3");
        $("#white").css("color","white");
        $("#colored").css("background-color","white");
        $("#colored").css("color","black");
        search_params["color"]="white";
        excut();
});
$("#colored").click(function () { 
    $("#colored").css("background-color","#428CB3");
    $("#colored").css("color","white");
    $("#white").css("background-color","white");
    $("#white").css("color","black");
    search_params["color"]="colored";
    excut();
});
$("#q150").click(function () { 
    $("#q150").css("background-color","#428CB3");
    $("#q150").css("color","white");
    $("#q190").css("background-color","white");
    $("#q190").css("color","black");
    search_params["quality"]="Basic";
    excut();
});
$("#q190").click(function () { 
    $("#q190").css("background-color","#428CB3");
    $("#q190").css("color","white");
    $("#q150").css("background-color","white");
    $("#q150").css("color","black");
    search_params["quality"]="High";
    excut();
});


$("#style").change(function () { 
    
   if ($("#style").val()=="plain"  && $("#white").css("background-color")=="rgb(66, 140, 179)") {
     search_params["style"]="plain";
   }
   if ($("#style").val()=="plain"  && $("#colored").css("background-color")=="rgb(66, 140, 179)") {
    search_params["style"]="plain";
  }
  if ($("#style").val()=="printed"  && $("#white").css("background-color")=="rgb(66, 140, 179)") {
    search_params["style"]="printed";
  }
  if ($("#style").val()=="printed"  && $("#colored").css("background-color")=="rgb(66, 140, 179)") {
   search_params["style"]="printed";
 }
 excut();
});

$("#quantity").change(function () { 
    search_params["quantity"]=$("#quantity").val();
    excut();
});



// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
    // 1: above 1.000 units - 20% discount
    // 2: above 500 units - 12% discount
    // 3: above 100 units - 5% discount


// Solution:
function excut(){
    $(".refresh-loader").show();
    $("#photo-product").attr("src","img/"+products[search_params["color"]][search_params["style"]]['photo']);
    $("#result-color").html(search_params["color"]);
    $("#result-quality").html(search_params["quality"]);
    $("#result-quantity").html(search_params["quantity"]);
    $("#result-style").html(search_params["style"]);
    var total=search_params["quantity"]* products[search_params["color"]][search_params["style"]]['unit_price'];
    if (search_params["quality"]=="High") {
        total+=total*0.12;
    }
    if (search_params["quantity"]>=1000) {
        total=total-total*0.2;
    }
    else if (search_params["quantity"]>=500) {
        total=total-total*0.12;
    } else if (search_params["quantity"]>=100){
        total=total-total*0.05;
    }
    $("#total-price").html(total);
    window.setTimeout(function(){ 
        $(".refresh-loader").hide();
     },500);
    
}










