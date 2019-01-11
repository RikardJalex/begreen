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



function showFeedbackCards() {
if (document.getElementById('breakfastRedMeat').checked) {

    showMeatCard();
}

}





function showCarCard(){

    document.getElementById('showCar').style.display='block';
}

function showtrainCard(){
document.getElementById('showTrain').style.display='block';
}
function showShoppingCard(){
document.getElementById('showShopping').style.display='block';
}
function showMeatCard(){
document.getElementById('showMeat').style.display='block';
}
function showElectricCard(){
document.getElementById('showElectric').style.display='block';
}
function showVegCard(){
document.getElementById('showVeg').style.display='block';
}
