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
    $('#showCar, #showMeat, #showTrain, #showVeg, #showShopping, #showElectric, #showNotLocalProd, #showLocalProd, #showAirplane, #showShopping2Hand, #showBus, #showSomeVeggies, #show1P, #show2P, #show3P, #show4P, #show5P, #show6P, #show7P, #show8P, #show9P, #show10P').hide();



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
            counter += 5;
            $("#showCar").show();
        }

        if($("#breakfastMeat").is(":not(:checked)") && $("#lunchMeat").is(":not(:checked)") && $("#dinnerMeat").is(":not(:checked)") && $("#breakfastFish").is(":not(:checked)") && $("#lunchFish").is(":not(:checked)") && $("#dinnerFish").is(":not(:checked)") && $("#otherMeat").is(":not(:checked)") && $("#otherFish").is(":not(:checked)")) {
            if($("#breakfastVeg").is(':checked') && $("#lunchVeg").is(':checked') && $("#dinnerVeg").is(':checked') && $("#otherVeg").is(':checked')) {
                if($("#breakfastVeg").is(':checked')) {
                    counter ++;
                }

                if($("#lunchVeg").is(':checked')) {
                    counter ++;
                }

                if($("#dinnerVeg").is(':checked')) {
                    counter ++;
                }

                if($("#otherVeg").is(':checked')) {
                    counter ++;
                }

                $("#showVeg").show();
                $("#showMeat").hide();
            }
        }

        if ($("#otherShopNew").is(':checked') || $("#otherShop2Hand").is(':checked')) {
            if ($("#otherShopNew").is(':checked')) {
                counter += 5;
            }

            if ($("#otherShop2Hand").is(':checked')) {
                //ifall vi ändrar värdet för 2Hand till annat än 0
            }

            $("#showShopping").show();
        }

        if($("#tv").is(':checked') || ($("#computer").is(':checked')) || ($("#phone").is(':checked')) ||($("#kitchenApp").is(':checked')) || ($("#devOther").is(':checked')) ){
            if($("#tv").is(':checked')) {
                counter += 3;
            }

            if($("#computer").is(':checked')) {
                counter += 3;
            }

            if($("#phone").is(':checked')) {
                counter += 1;
            }

            if($("#kitchenApp").is(':checked')) {
                counter += 2;
            }

            if($("#devOther").is(':checked')) {
                counter += 1;
            }

            $("#showElectric").show();
        }

        if($("#vehicletrain").is(':checked')) {
            counter += 2;
            $("#showTrain").show();
        }

        //

        if($("#breakfastVeg").is(':checked') || $("#lunchVeg").is(':checked') || $("#dinnerVeg").is(':checked') || $("#otherVeg").is(':checked')) {
            if($("#breakfastVeg").is(':checked')) {
                counter +=1;
            }
            if($("#lunchVeg").is(':checked')){
                 counter +=1;
            }

            if($("#dinnerVeg").is(':checked')){
                counter +=1;
            }

            if($("#otherVeg").is(':checked')){
                 counter +=1;
             }

            $("#showSomeVeggies").show();
        }

        if($("#breakfastLocProd").is(':checked') || $("#lunchLocProd").is(':checked') || $("#dinnerLocProd").is(':checked') || $("#otherLocProd").is(':checked')) {
            if($("#breakfastLocProd").is(':checked')){
            counter ++;
            }
            if($("#lunchLocProd").is(':checked')){
                counter ++;
            }
            if($("#dinnerLocProd").is(':checked')){
                counter ++;
            }
            if($("#otherLocProd").is(':checked')){
                counter ++;
            }

            $("#showLocalProd").show();
        }

        if($("#breakfastNoLocProc").is(':checked') || $("#lunchNoLocProc").is(':checked') || $("#dinnerNoLocProc").is(':checked') || $("#otherNoLocProc").is(':checked')) {
            if($("#breakfastNoLocProc").is(':checked')){
                counter += 8;
            }
            if($("#lunchNoLocProc").is(':checked')){
            counter += 8;
            }
            if($("#dinnerNoLocProc").is(':checked')){
                counter += 8;
            }
            if($("#otherNoLocProc").is(':checked')){
                counter += 8;
            }

            $("#showNotLocalProd").show();
        }

        if($("#vehicleairplane").is(':checked')) {
            counter += 15;
            $("#showAirplane").show();
        }

        if($("#otherShop2Hand").is(':checked')) {
            //Kan lägga till counter om 2Hand ändrar värde
            $("#showShopping2Hand").show();
        }

        if($("#vehicleLocal").is(':checked')) {
            counter += 3;
            $("#showBus").show();
        }

        if($("#otherNewsMag").is(':checked')) {
                    counter += 3;
                }

        if($("#otherWash").is(':checked')) {
            counter += 2;
        }

        if($("#dev02").is(':checked')) {
           counter ++;
        }

        if($("#dev34").is(':checked')) {
           counter +=2;
        }

        if($("#dev56").is(':checked')) {
           counter +=3;
        }

        if($("#dev78").is(':checked')) {
           counter +=4;
        }

        if($("#deb9").is(':checked')) {
           counter +=5;
        }

        if($("#trans02").is(':checked')) {
           counter ++;
        }

        if($("#trans34").is(':checked')) {
           counter +=2;
        }

        if($("#trans56").is(':checked')) {
           counter +=3;
        }

        if($("#trans78").is(':checked')) {
           counter +=4;
        }

        if($("#trans9").is(':checked')) {
           counter +=5;
        }
        console.log(counter);

        if($("#breakfastDairy").is(':checked') || $("#lunchDairy").is(':checked') || $("#dinnerDairy").is(':checked') || $("#otherDairy").is(':checked')){

            if($("#breakfastDairy").is(':checked')) {
                counter += 2;
            }

            if($("#lunchDairy").is(':checked')) {
                counter += 2;
            }

            if($("#dinnerDairy").is(':checked')) {
                counter += 2;
            }

            if($("#otherDairy").is(':checked')) {
                counter += 2;
            }
        }



        if(counter <= 15) {
            document.getElementById('show10P').style.display = 'block';
        } else if (counter <= 18) {
            document.getElementById('show9P').style.display = 'block';
        } else if (counter <= 21) {
            document.getElementById('show8P').style.display = 'block';
        } else if (counter <= 24) {
            document.getElementById('show7P').style.display = 'block';
        } else if (counter <= 27) {
            document.getElementById('show6P').style.display = 'block';
        } else if (counter <= 30) {
            document.getElementById('show5P').style.display = 'block';
        } else if (counter <= 33) {
            document.getElementById('show4P').style.display = 'block';
        } else if (counter <= 36) {
            document.getElementById('show3P').style.display = 'block';
        } else if (counter <= 39) {
            document.getElementById('show2P').style.display = 'block';
        } else if (counter >= 40) {
            document.getElementById('show1P').style.display = 'block';
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

