var breakfast = [
  {
    id: 0,
    item: "Orange juice",
    calories: 112,
    protien: 10,
    fats: 4,
    fdgrd: "A+",
    carbs: 26,
  },
  {
    id: 1,
    item: "Boiled Eggs",
    calories: 91,
    protien: 14,
    fats: 8,
    fdgrd: "A+",
    carbs: 20,
  },
  {
    id: 2,
    item: "Oats",
    calories: 120,
    protien: 37,
    fats: 2,
    fdgrd: "A",
    carbs: 80,
  },
  {
    id: 3,
    item: "Omlet",
    calories: 91,
    protien: 60,
    fats: 3.5,
    fdgrd: "B+",
    carbs: 50,
  },
];
var lunch = [
  {
    id: 0,
    item: "Apple",
    calories: 82,
    protien: 0.4,
    fats: 0.2,
    fdgrd: "A+",
    carbs: 84,
  },
  {
    id: 1,
    item: "Chicken ",
    calories: 91,
    protien: 37,
    fats: 8,
    fdgrd: "A+",
    carbs: 30,
  },
  {
    id: 2,
    item: "Potatoes baked",
    calories: 120,
    protien: 15.6,
    fats: 16,
    fdgrd: "A",
    carbs: 90,
  },
  {
    id: 3,
    item: "Boiled Rice",
    calories: 91,
    protien: 10,
    fats: 4,
    fdgrd: "A+",
    carbs: 26,
  },
];
var dinner = [
  {
    id: 0,
    item: "Pulses",
    calories: 102,
    protien: 120,
    fats: 0.3,
    fdgrd: "A+",
    carbs: 12,
  },
  {
    id: 1,
    item: "Veggies",
    calories: 126,
    protien: 40,
    fats: 0.4,
    fdgrd: "A+",
    carbs: 26,
  },
  {
    id: 2,
    item: "Baked Chicken",
    calories: 120,
    protien: 37,
    fats: 6,
    fdgrd: "A",
    carbs: 40,
  },
  {
    id: 3,
    item: "Chicken Salad",
    calories: 91,
    protien: 110,
    fats: 4,
    fdgrd: "A+",
    carbs: 20,
  },
];
var snacks = [
  {
    id: 0,
    item: "Protien shake",
    calories: 12,
    protien: 115,
    fats: 0.4,
    fdgrd: "A+",
    carbs: 6,
  },
  {
    id: 1,
    item: "Scrambled Eggs",
    calories: 81,
    protien: 90,
    fats: 0.4,
    fdgrd: "A+",
    carbs: 36,
  },
  {
    id: 2,
    item: "Fruit Salad ",
    calories: 120,
    protien: 37,
    fats: 4,
    fdgrd: "A",
    carbs: 40,
  },
  {
    id: 3,
    item: "Pizza",
    calories: 91,
    protien: 30,
    fats: 64,
    fdgrd: "C",
    carbs: 260,
  },
];
document.getElementById("op1").innerHTML = [
  breakfast[0].item,
  breakfast[0].calories + "cals",
];
document.getElementById("op2").innerHTML = [
  breakfast[1].item,
  breakfast[1].calories + "cals",
];
document.getElementById("op3").innerHTML = [
  breakfast[2].item,
  breakfast[2].calories + "cals",
];
document.getElementById("op4").innerHTML = [
  breakfast[3].item,
  breakfast[3].calories + "cals",
];

document.getElementById("op5").innerHTML = [
  lunch[0].item,
  lunch[0].calories + "cals",
];
document.getElementById("op6").innerHTML = [
  lunch[1].item,
  lunch[1].calories + "cals",
];
document.getElementById("op7").innerHTML = [
  lunch[2].item,
  lunch[2].calories + "cals",
];
document.getElementById("op8").innerHTML = [
  lunch[3].item,
  lunch[3].calories + "cals",
];

document.getElementById("op9").innerHTML = [
  dinner[0].item,
  dinner[0].calories + "cals",
];
document.getElementById("op10").innerHTML = [
  dinner[1].item,
  dinner[1].calories + "cals",
];
document.getElementById("op11").innerHTML = [
  dinner[2].item,
  dinner[2].calories + "cals",
];
document.getElementById("op12").innerHTML = [
  dinner[3].item,
  dinner[3].calories + "cals",
];

document.getElementById("op13").innerHTML = [
  snacks[0].item,
  snacks[0].calories + "cals",
];
document.getElementById("op14").innerHTML = [
  snacks[1].item,
  snacks[1].calories + "cals",
];
document.getElementById("op15").innerHTML = [
  snacks[2].item,
  snacks[2].calories + "cals",
];
document.getElementById("op16").innerHTML = [
  snacks[3].item,
  snacks[3].calories + "cals",
];

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("grf");
var btn6 = document.getElementById("total");
btn1.addEventListener("click", addcard);
btn2.addEventListener("click", addcard1);
btn3.addEventListener("click", addcard2);
btn4.addEventListener("click", addcard3);
btn5.addEventListener("click", graph);
btn6.addEventListener("click", total);

function addcard() {
  var brk = document.getElementById("brk").value;
  var lnc = document.getElementById("lnc").value;

  // var op2 = document.getElementById("op2").value
  // var data = [breakfast[0].id,breakfast[1].id]

  for (var i = 0; i < brk.length; i++) {
    if (brk[i] == 0) {
      console.log(breakfast[0]);
      var card = "";
      for (var j = 0; j < breakfast.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/308/903/png-clipart-oranges-and-orange-juice-splash-orange-orange-juice.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  breakfast[0].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/308/903/png-clipart-oranges-and-orange-juice-splash-orange-orange-juice.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              breakfast[0].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/308/903/png-clipart-oranges-and-orange-juice-splash-orange-orange-juice.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              breakfast[0].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/308/903/png-clipart-oranges-and-orange-juice-splash-orange-orange-juice.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              breakfast[0].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/308/903/png-clipart-oranges-and-orange-juice-splash-orange-orange-juice.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              breakfast[0].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/308/903/png-clipart-oranges-and-orange-juice-splash-orange-orange-juice.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              breakfast[0].carbs + "g"
                            }</p>
                        </div>`;

        document.getElementById("inr").innerHTML = card;
      }
      // document.getElementById("inr").innerHTML = card;
      break;
    } else if (brk[i] == 1) {
      console.log(breakfast[1]);
      var card = "";
      for (var j = 0; j < breakfast.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Boiled-Egg-PNG-Transparent-Image.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  breakfast[1].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Boiled-Egg-PNG-Transparent-Image.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              breakfast[1].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Boiled-Egg-PNG-Transparent-Image.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              breakfast[1].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Boiled-Egg-PNG-Transparent-Image.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              breakfast[1].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Boiled-Egg-PNG-Transparent-Image.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              breakfast[1].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Boiled-Egg-PNG-Transparent-Image.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              breakfast[1].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr").innerHTML = card;
      }
      // document.getElementById("inr").innerHTML = card;
      break;
    } else if (brk[i] == 2) {
      console.log(breakfast[2]);
      var card = "";
      for (var j = 0; j < breakfast.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/4/14/17/imgbin-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-EJacd0X45DZtfpDRFVHs7Sbca.jpg" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  breakfast[2].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/4/14/17/imgbin-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-EJacd0X45DZtfpDRFVHs7Sbca.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              breakfast[2].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/4/14/17/imgbin-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-EJacd0X45DZtfpDRFVHs7Sbca.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              breakfast[2].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/4/14/17/imgbin-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-EJacd0X45DZtfpDRFVHs7Sbca.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              breakfast[2].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/4/14/17/imgbin-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-EJacd0X45DZtfpDRFVHs7Sbca.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              breakfast[2].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/4/14/17/imgbin-quaker-instant-oatmeal-breakfast-cereal-quaker-oats-company-breakfast-EJacd0X45DZtfpDRFVHs7Sbca.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              breakfast[2].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr").innerHTML = card;
      }
      // document.getElementById("inr").innerHTML = card;
      break;
    } else if (brk[i] == 3) {
      console.log(breakfast[3]);
      var card = "";
      for (var j = 0; j < breakfast.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://img1.pnghut.com/24/11/21/LDLk4fsA11/breakfast-cereal-sandwich-drink-egg-american-food.jpg" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  breakfast[3].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://img1.pnghut.com/24/11/21/LDLk4fsA11/breakfast-cereal-sandwich-drink-egg-american-food.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              breakfast[3].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://img1.pnghut.com/24/11/21/LDLk4fsA11/breakfast-cereal-sandwich-drink-egg-american-food.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              breakfast[3].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://img1.pnghut.com/24/11/21/LDLk4fsA11/breakfast-cereal-sandwich-drink-egg-american-food.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              breakfast[3].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://img1.pnghut.com/24/11/21/LDLk4fsA11/breakfast-cereal-sandwich-drink-egg-american-food.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              breakfast[3].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://img1.pnghut.com/24/11/21/LDLk4fsA11/breakfast-cereal-sandwich-drink-egg-american-food.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              breakfast[3].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr").innerHTML = card;
      }
      // document.getElementById("inr").innerHTML = card;
      break;
    }
  }
}

//the lunch part starts here
//
//
function addcard1() {
  var lnc = document.getElementById("lnc").value;
  // var op2 = document.getElementById("op2").value
  // var data = [breakfast[0].id,breakfast[1].id]

  for (var i = 0; i < lnc.length; i++) {
    if (lnc[i] == 0) {
      console.log(lunch[0]);
      var card = "";
      for (var j = 0; j < lunch.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/348-3484413_png-apple-maa-fruta-saudavel-freetoedit-transparent-background.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  lunch[0].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/348-3484413_png-apple-maa-fruta-saudavel-freetoedit-transparent-background.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              lunch[0].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/348-3484413_png-apple-maa-fruta-saudavel-freetoedit-transparent-background.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              lunch[0].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/348-3484413_png-apple-maa-fruta-saudavel-freetoedit-transparent-background.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              lunch[0].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/348-3484413_png-apple-maa-fruta-saudavel-freetoedit-transparent-background.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              lunch[0].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/348-3484413_png-apple-maa-fruta-saudavel-freetoedit-transparent-background.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              lunch[0].carbs + "g"
                            }</p>
                        </div>`;

        document.getElementById("inr1").innerHTML = card;
      }
      // document.getElementById("inr1").innerHTML = card;
      break;
    } else if (lnc[i] == 1) {
      console.log(lunch[1]);
      var card = "";
      for (var j = 0; j < lunch.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://www.vippng.com/png/detail/147-1470743_grilled-chicken-breast-samgyeopsal.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  lunch[1].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://www.vippng.com/png/detail/147-1470743_grilled-chicken-breast-samgyeopsal.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              lunch[1].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://www.vippng.com/png/detail/147-1470743_grilled-chicken-breast-samgyeopsal.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              lunch[1].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.vippng.com/png/detail/147-1470743_grilled-chicken-breast-samgyeopsal.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              lunch[1].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.vippng.com/png/detail/147-1470743_grilled-chicken-breast-samgyeopsal.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              lunch[1].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.vippng.com/png/detail/147-1470743_grilled-chicken-breast-samgyeopsal.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              lunch[1].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr1").innerHTML = card;
      }
      // document.getElementById("inr1").innerHTML = card;
      break;
    } else if (lnc[i] == 2) {
      console.log(lunch[2]);
      var card = "";
      for (var j = 0; j < lunch.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://www.pikpng.com/pngl/m/55-555904_baked-potato-png-baked-jacket-potato-png-clipart.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  lunch[2].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://www.pikpng.com/pngl/m/55-555904_baked-potato-png-baked-jacket-potato-png-clipart.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              lunch[2].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://www.pikpng.com/pngl/m/55-555904_baked-potato-png-baked-jacket-potato-png-clipart.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              lunch[2].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pikpng.com/pngl/m/55-555904_baked-potato-png-baked-jacket-potato-png-clipart.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              lunch[2].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pikpng.com/pngl/m/55-555904_baked-potato-png-baked-jacket-potato-png-clipart.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              lunch[2].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pikpng.com/pngl/m/55-555904_baked-potato-png-baked-jacket-potato-png-clipart.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              lunch[2].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr1").innerHTML = card;
      }
      // document.getElementById("inr1").innerHTML = card;
      break;
    } else if (lnc[i] == 3) {
      console.log(lunch[3]);
      var card = "";
      for (var j = 0; j < lunch.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/25/25/6/imgbin-cooked-rice-asian-cuisine-bowl-rice-xjAK5VsDfy4jRDCHHMxGxU6vi.jpg" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  lunch[3].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/25/25/6/imgbin-cooked-rice-asian-cuisine-bowl-rice-xjAK5VsDfy4jRDCHHMxGxU6vi.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              lunch[3].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/25/25/6/imgbin-cooked-rice-asian-cuisine-bowl-rice-xjAK5VsDfy4jRDCHHMxGxU6vi.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              lunch[3].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/25/25/6/imgbin-cooked-rice-asian-cuisine-bowl-rice-xjAK5VsDfy4jRDCHHMxGxU6vi.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              lunch[3].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/25/25/6/imgbin-cooked-rice-asian-cuisine-bowl-rice-xjAK5VsDfy4jRDCHHMxGxU6vi.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              lunch[3].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/25/25/6/imgbin-cooked-rice-asian-cuisine-bowl-rice-xjAK5VsDfy4jRDCHHMxGxU6vi.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              lunch[3].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr1").innerHTML = card;
      }
      // document.getElementById("inr1").innerHTML = card;
      break;
    }
  }
}

//dinner part starts here
//
//
function addcard2() {
  var dnr = document.getElementById("dnr").value;
  // var op2 = document.getElementById("op2").value
  // var data = [breakfast[0].id,breakfast[1].id]

  for (var i = 0; i < dnr.length; i++) {
    if (dnr[i] == 0) {
      console.log(dinner[0]);
      var card = "";
      for (var j = 0; j < dinner.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/14/22/11/imgbin-dal-paneer-tikka-masala-punjabi-cuisine-indian-cuisine-chana-masala-curry-corn-dish-with-garlic-on-bowl-vqzNKFLKgrrc9LyB3PtW8K7BU.jpg" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  dinner[0].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/14/22/11/imgbin-dal-paneer-tikka-masala-punjabi-cuisine-indian-cuisine-chana-masala-curry-corn-dish-with-garlic-on-bowl-vqzNKFLKgrrc9LyB3PtW8K7BU.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              dinner[0].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/14/22/11/imgbin-dal-paneer-tikka-masala-punjabi-cuisine-indian-cuisine-chana-masala-curry-corn-dish-with-garlic-on-bowl-vqzNKFLKgrrc9LyB3PtW8K7BU.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              dinner[0].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/14/22/11/imgbin-dal-paneer-tikka-masala-punjabi-cuisine-indian-cuisine-chana-masala-curry-corn-dish-with-garlic-on-bowl-vqzNKFLKgrrc9LyB3PtW8K7BU.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              dinner[0].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/14/22/11/imgbin-dal-paneer-tikka-masala-punjabi-cuisine-indian-cuisine-chana-masala-curry-corn-dish-with-garlic-on-bowl-vqzNKFLKgrrc9LyB3PtW8K7BU.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              dinner[0].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://cdn.imgbin.com/14/22/11/imgbin-dal-paneer-tikka-masala-punjabi-cuisine-indian-cuisine-chana-masala-curry-corn-dish-with-garlic-on-bowl-vqzNKFLKgrrc9LyB3PtW8K7BU.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              dinner[0].carbs + "g"
                            }</p>
                        </div>`;

        document.getElementById("inr2").innerHTML = card;
      }
      // document.getElementById("inr2").innerHTML = card;
      break;
    } else if (dnr[i] == 1) {
      console.log(dinner[1]);
      var card = "";
      for (var j = 0; j < dinner.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://www.vhv.rs/dpng/d/410-4101511_vegetables-salad-png-png-download-salads-png-transparent.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  dinner[1].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://www.vhv.rs/dpng/d/410-4101511_vegetables-salad-png-png-download-salads-png-transparent.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              dinner[1].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://www.vhv.rs/dpng/d/410-4101511_vegetables-salad-png-png-download-salads-png-transparent.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              dinner[1].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.vhv.rs/dpng/d/410-4101511_vegetables-salad-png-png-download-salads-png-transparent.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              dinner[1].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.vhv.rs/dpng/d/410-4101511_vegetables-salad-png-png-download-salads-png-transparent.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              dinner[1].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.vhv.rs/dpng/d/410-4101511_vegetables-salad-png-png-download-salads-png-transparent.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              dinner[1].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr2").innerHTML = card;
      }
      // document.getElementById("inr2").innerHTML = card;
      break;
    } else if (dnr[i] == 2) {
      console.log(dinner[2]);
      var card = "";
      for (var j = 0; j < dinner.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://i.pinimg.com/originals/02/ec/a7/02eca748b7cae3f7972d5027198bb51c.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  dinner[2].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://i.pinimg.com/originals/02/ec/a7/02eca748b7cae3f7972d5027198bb51c.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              dinner[2].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://i.pinimg.com/originals/02/ec/a7/02eca748b7cae3f7972d5027198bb51c.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              dinner[2].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://i.pinimg.com/originals/02/ec/a7/02eca748b7cae3f7972d5027198bb51c.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              dinner[2].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://i.pinimg.com/originals/02/ec/a7/02eca748b7cae3f7972d5027198bb51c.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              dinner[2].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://i.pinimg.com/originals/02/ec/a7/02eca748b7cae3f7972d5027198bb51c.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              dinner[2].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr2").innerHTML = card;
      }
      // document.getElementById("inr2").innerHTML = card;
      break;
    } else if (dnr[i] == 3) {
      console.log(dinner[3]);
      var card = "";
      for (var j = 0; j < dinner.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/265-2652525_grilled-chicken-salad-hd-png-download.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  dinner[3].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/265-2652525_grilled-chicken-salad-hd-png-download.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              dinner[3].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/265-2652525_grilled-chicken-salad-hd-png-download.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              dinner[3].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/265-2652525_grilled-chicken-salad-hd-png-download.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              dinner[3].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/265-2652525_grilled-chicken-salad-hd-png-download.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              dinner[3].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://www.pngfind.com/pngs/m/265-2652525_grilled-chicken-salad-hd-png-download.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              dinner[3].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr2").innerHTML = card;
      }
      // document.getElementById("inr2").innerHTML = card;
      break;
    }
  }
}

//Snacks part starts here
//
//

function addcard3() {
  var snc = document.getElementById("snc").value;
  // var op2 = document.getElementById("op2").value
  // var data = [breakfast[0].id,breakfast[1].id]

  for (var i = 0; i < snc.length; i++) {
    if (snc[i] == 0) {
      console.log(snacks[0]);
      var card = "";
      for (var j = 0; j < snacks.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/1veggie-style-vegan-supplement-protein-shake-glass-milk-shake-chocolate-115635499982bguoyfrwt.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  snacks[0].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/1veggie-style-vegan-supplement-protein-shake-glass-milk-shake-chocolate-115635499982bguoyfrwt.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              snacks[0].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/1veggie-style-vegan-supplement-protein-shake-glass-milk-shake-chocolate-115635499982bguoyfrwt.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              snacks[0].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/1veggie-style-vegan-supplement-protein-shake-glass-milk-shake-chocolate-115635499982bguoyfrwt.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              snacks[0].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/1veggie-style-vegan-supplement-protein-shake-glass-milk-shake-chocolate-115635499982bguoyfrwt.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              snacks[0].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/1veggie-style-vegan-supplement-protein-shake-glass-milk-shake-chocolate-115635499982bguoyfrwt.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              snacks[0].carbs + "g"
                            }</p>
                        </div>`;

        document.getElementById("inr3").innerHTML = card;
      }
      // document.getElementById("inr3").innerHTML = card;
      break;
    } else if (snc[i] == 1) {
      console.log(snacks[1]);
      var card = "";
      for (var j = 0; j < snacks.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://p7.hiclipart.com/preview/838/520/966/carbonara-scrambled-eggs-fried-egg-spaghetti-recipe-chive-scrambled-eggs.jpg" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  snacks[1].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://p7.hiclipart.com/preview/838/520/966/carbonara-scrambled-eggs-fried-egg-spaghetti-recipe-chive-scrambled-eggs.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              snacks[1].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://p7.hiclipart.com/preview/838/520/966/carbonara-scrambled-eggs-fried-egg-spaghetti-recipe-chive-scrambled-eggs.jpg" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              snacks[1].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://p7.hiclipart.com/preview/838/520/966/carbonara-scrambled-eggs-fried-egg-spaghetti-recipe-chive-scrambled-eggs.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              snacks[1].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://p7.hiclipart.com/preview/838/520/966/carbonara-scrambled-eggs-fried-egg-spaghetti-recipe-chive-scrambled-eggs.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              snacks[1].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://p7.hiclipart.com/preview/838/520/966/carbonara-scrambled-eggs-fried-egg-spaghetti-recipe-chive-scrambled-eggs.jpg" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              snacks[1].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr3").innerHTML = card;
      }
      // document.getElementById("inr3").innerHTML = card;
      break;
    } else if (snc[i] == 2) {
      console.log(snacks[2]);
      var card = "";
      for (var j = 0; j < snacks.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/fruit-salad-png-image-fruit-salad-png-transparent-11563611744tppkhxtkpi.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  snacks[2].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/fruit-salad-png-image-fruit-salad-png-transparent-11563611744tppkhxtkpi.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              snacks[2].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/fruit-salad-png-image-fruit-salad-png-transparent-11563611744tppkhxtkpi.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              snacks[2].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/fruit-salad-png-image-fruit-salad-png-transparent-11563611744tppkhxtkpi.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              snacks[2].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/fruit-salad-png-image-fruit-salad-png-transparent-11563611744tppkhxtkpi.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              snacks[2].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://toppng.com/uploads/preview/fruit-salad-png-image-fruit-salad-png-transparent-11563611744tppkhxtkpi.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              snacks[2].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr3").innerHTML = card;
      }
      // document.getElementById("inr3").innerHTML = card;
      break;
    } else if (snc[i] == 3) {
      console.log(snacks[3]);
      var card = "";
      for (var j = 0; j < snacks.length; j++) {
        card = `<div class="card1">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/218/564/png-clipart-pizza-pizza.png" height="40px" width="100%" margin="0px auto"/>
                                <p style="margin:0px;text-align:center;font-size:13px">${
                                  snacks[3].item
                                }</p>
                            </div>
                        </div>
                        <div class="card2">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/218/564/png-clipart-pizza-pizza.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Calories<br/>${
                              snacks[3].calories + "g"
                            }</p>
                            
                        </div>
                        <div class="card3">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/218/564/png-clipart-pizza-pizza.png" height="40px" width="100%" margin="0px auto"/>
                                
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Fats<br/>${
                              snacks[3].fats + "g"
                            }</p>
                            
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/218/564/png-clipart-pizza-pizza.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Protien<br/>${
                              snacks[3].protien + "g"
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/218/564/png-clipart-pizza-pizza.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Food Grade<br/>${
                              snacks[3].fdgrd
                            }</p>
                        </div>
                        <div class="card4">
                            <div class="img1">
                                <img src = "https://e7.pngegg.com/pngimages/218/564/png-clipart-pizza-pizza.png" height="40px" width="100%" margin="0px auto"/>
                            </div>
                            <p style="margin:0px;text-align:center;font-size:13px">Carbs<br/>${
                              snacks[3].carbs + "g"
                            }</p>
                        </div>`;
        document.getElementById("inr3").innerHTML = card;
      }
      // document.getElementById("inr3").innerHTML = card;
      break;
    }
  }
}
total();
function total() {
  // var cal=0;
  var ptn = 0;
  var fats = 0;
  var crb = 0;
  var brk = document.getElementById("brk").value;
  var lnc = document.getElementById("lnc").value;
  var dnr = document.getElementById("dnr").value;
  var snc = document.getElementById("snc").value;
  console.log(brk);
  for (var i = 0; i < brk.length; i++) {
    if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 1 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[1].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[1].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[1].fats + lunch[0].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[1].carbs + lunch[0].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 2 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[2].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[2].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[2].fats + lunch[0].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[2].carbs + lunch[0].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 3 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[3].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[3].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[3].fats + lunch[0].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[3].carbs + lunch[0].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    }
    // // // // // // // //lunch // // ////////////////////////////////////////////////////////////
    else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 1 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[3].calories +
        lunch[1].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[3].protien +
        lunch[1].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[3].fats + lunch[1].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[3].carbs + lunch[1].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 2 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[3].calories +
        lunch[2].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[3].protien +
        lunch[2].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[3].fats + lunch[2].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[3].carbs + lunch[2].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 3 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[3].calories +
        lunch[3].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[3].protien +
        lunch[3].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[3].fats + lunch[3].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[3].carbs + lunch[3].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    }
    // // // // // dinner////////////////////////////////////////////////////////
    else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 1 && snc[i] == 0) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[1].calories +
        snacks[0].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[1].protien +
        snacks[0].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[1].fats + snacks[0].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[1].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 2 && snc[i] == 0) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[2].calories +
        snacks[0].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[2].protien +
        snacks[0].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[2].fats + snacks[0].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[2].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 3 && snc[i] == 0) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[3].calories +
        snacks[0].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[3].protien +
        snacks[0].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[3].fats + snacks[0].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[3].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    }
    // //////////////////////Snacks ////////////////////////////////////////
    else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 0) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[0].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[0].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[0].fats + snacks[0].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[0].carbs + snacks[0].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 1) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[1].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[1].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[0].fats + snacks[1].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[0].carbs + snacks[1].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 2) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[2].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[2].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[0].fats + snacks[2].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[0].carbs + snacks[2].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    } else if (brk[i] == 0 && lnc[i] == 0 && dnr[i] == 0 && snc[i] == 3) {
      var cal =
        breakfast[0].calories +
        lunch[0].calories +
        dinner[0].calories +
        snacks[3].calories;
      ptn =
        breakfast[0].protien +
        lunch[0].protien +
        dinner[0].protien +
        snacks[3].protien;
      fats =
        breakfast[0].fats + lunch[0].fats + dinner[0].fats + snacks[3].fats;
      crb =
        breakfast[0].carbs + lunch[0].carbs + dinner[0].carbs + snacks[3].carbs;
      var card = "";

      card = `<div >
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total calories(g): ${cal}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total protien(g):  ${ptn}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total fats(g):     ${fats}</div>
                            <div style="margin:10px;color:grey;font-family: 'Source Sans Pro', sans-serif;">Total carbs(g):    ${crb}</div>
                        </div>`;
      document.getElementById("brkfst1").innerHTML = card;
    }
  }
  localStorage.setItem("cal", cal);
  localStorage.setItem("ptn", ptn);
  localStorage.setItem("fats", fats);
  localStorage.setItem("crb", crb);
  console.log(cal);
  console.log(ptn);
  console.log(fats);
  console.log(crb);
}

function graph() {
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "Daily Diet Chart",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "splineArea",
        dataPoints: [
          { label: "calories", y: Number(localStorage.getItem("cal")) },
          { label: "protien", y: Number(localStorage.getItem("ptn")) },
          { label: "fats", y: Number(localStorage.getItem("fats")) },
          { label: "carbs", y: Number(localStorage.getItem("crb")) },
        ],
      },
    ],
  });
  chart.render();
}
