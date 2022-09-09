function display(arr) {
  document.getElementById("content").innerHTML = "";
  arr.forEach((element) => {
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    var image = document.createElement("div");
    image.setAttribute("class", "image");
    var img = document.createElement("img");
    img.src = element.img_url;
    image.append(img);
    var name = document.createElement("p");
    name.setAttribute("class", "name");
    name.innerText = element.name;
    var detail = document.createElement("div");
    detail.setAttribute("class", "detail");
    var carbs = document.createElement("p");
    var fat = document.createElement("p");
    var protein = document.createElement("p");
    carbs.innerText = "Carbs: " + element.carbs;
    carbs.style.color = "rgb(223, 77, 77)";
    fat.innerText = "Fat: " + element.fat;
    fat.style.color = "rgb(223, 77, 77)";
    protein.innerText = "Protein: " + element.protein;
    protein.style.color = "rgb(70, 97, 138)";
    detail.append(carbs, fat, protein);
    var div = document.createElement("div");
    div.append(name, detail);
    var cal = document.createElement("div");
    cal.setAttribute("class", "calory");
    var val = document.createElement("p");
    val.innerText = element.cal;
    cal.append(val);
    card.append(image, div, cal);
    document.getElementById("content").append(card);
  });
}
document.getElementById("searchItm").addEventListener(
  "keyup",
  debounce(async () => {
    var item = document.getElementById("searchItm").value;
    var res = await fetch(
      `https://mynetdiaryfood-api.herokuapp.com/Food?q=${item}`
    );
    var res2 = await res.json();
    console.log(res2);
    display(res2);
  }, 500)
);

function debounce(func, delay) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(this, arguments);
    }, delay);
  };
}
