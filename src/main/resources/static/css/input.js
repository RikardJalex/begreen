/*
function myFunction() {
  var x = document.getElementById("lunchCard");
  console.log("hEj");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}*/

/*$(function hideCar () {
console.log("heJJJJJ");
     $('#showCar').removeClass('hidden');
 });*/

$( document ).ready(function() {
    let counter = 0;
   $('#showCar, #showMeat, #showTrain, #showVeg, #showShopping, #showElectric').hide();

   $( "#showFeedbackCards" ).click(function() {

        if($("#breakfastMeat").is(':checked') || $("#lunchMeat").is(':checked') || $("#dinnerMeat").is(':checked') || $("#otherMeat").is(':checked')) {

            if($("#breakfastMeat").is(':checked')) {
                counter += 5;
            }

            if($("#lunchMeat").is(':checked')) {
                counter += 5;
            }

            if($("#dinnerMeat").is(':checked')) {
                counter += 5;
            }

            if($("#otherMeat").is(':checked')) {
                counter += 5;
            }

            $("#showMeat").show();
        }


        if($("#vehicleCar").is(':checked')) {
            $("#showCar").show();
        }

        if($("#breakfastMeat").is(":not(:checked)") && $("#lunchMeat").is(":not(:checked)") && $("#dinnerMeat").is(":not(:checked)") && $("#breakfastFish").is(":not(:checked)") && $("#lunchFish").is(":not(:checked)") && $("#dinnerFish").is(":not(:checked)") && $("#otherMeat").is(":not(:checked)") && $("#otherFish").is(":not(:checked)")) {
            console.log("första if-satsen");
            if($("#breakfastVeg").is(':checked') && $("#lunchVeg").is(':checked') && $("#dinnerVeg").is(':checked') && $("#otherVeg").is(':checked')) {
                $("#showVeg").show();
                $("#showMeat").hide();
            }
        }

        if ($("#otherShopNew").is(':checked') || $("#otherShop2Hand").is(':checked') ) {
            $("#showShopping").show();
        }

        if($("#tv").is(':checked') || ($("#computer").is(':checked')) || ($("#phone").is(':checked')) ||($("#kitchenApp").is(':checked')) ){
            $("#showElectric").show();
        }

        if($("#vehicletrain").is(':checked')) {
            $("#showTrain").show();
        }

   });

});

function switchCardToLunch() {
    if (document.getElementById('breakfastCard')) {
        document.getElementById('breakfastCard').style.display = 'none';
        document.getElementById('lunchCard').style.display = 'block';
    }
}

function switchCardToDinner() {
    if (document.getElementById('lunchCard')) {
        document.getElementById('lunchCard').style.display = 'none';
        document.getElementById('dinnerCard').style.display = 'block';
    }
}

function switchCardToOther1() {
    if (document.getElementById('dinnerCard')) {
        document.getElementById('dinnerCard').style.display = 'none';
        document.getElementById('otherCard1').style.display = 'block';
    }
}

function switchCardToTransportation() {
    if (document.getElementById('otherCard1')) {
        document.getElementById('otherCard1').style.display = 'none';
        document.getElementById('transportationCard').style.display = 'block';
    }
}

function switchCardToDistance() {
    if (document.getElementById('transportationCard')) {
        document.getElementById('transportationCard').style.display = 'none';
        document.getElementById('distanceCard').style.display = 'block';
    }
}

function switchCardToDevices() {
    if (document.getElementById('distanceCard')) {
        document.getElementById('distanceCard').style.display = 'none';
        document.getElementById('devicesCard').style.display = 'block';
    }
}

function switchCardToUsage() {
    if (document.getElementById('devicesCard')) {
        document.getElementById('devicesCard').style.display = 'none';
        document.getElementById('usageCard').style.display = 'block';
    }
}

function switchCardToOther2() {
    if (document.getElementById('usageCard')) {
        document.getElementById('usageCard').style.display = 'none';
        document.getElementById('otherCard2').style.display = 'block';
    }
}

function hideCards() {
    if (document.getElementById('otherCard2')) {
        document.getElementById('otherCard2').style.display = 'none';
    }
}

