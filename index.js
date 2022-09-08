window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    document.getElementById("navbar").style.backgroundColor = "white";
    var bod = document.querySelectorAll(".nav-animation");
    bod.forEach((el) => {
      el.style.borderColor = "#cecece";
    });
    var atag = document.querySelectorAll(".nav-animation>a");
    atag.forEach((element) => {
      element.style.color = "#46618a";
    });
    document.getElementById("signup").style.borderColor = "#cecece";
    document.getElementById("signin").style.borderColor = "green";
    var sign = document.querySelectorAll("#signin>a");
    sign.forEach((el) => {
      el.style.color = "green";
    });

    document.getElementById("navbar").style.padding = "6px";
  } else {
    document.getElementById("navbar").style.backgroundColor = "#0a9b42";
    var atag = document.querySelectorAll(".nav-animation>a");
    atag.forEach((element) => {
      element.style.color = "white";
    });
    document.getElementById("signup").style.borderColor = "green";
    document.getElementById("signin").style.borderColor = "green";
    var sign = document.querySelectorAll("#signin>a");
    sign.forEach((el) => {
      el.style.color = "white";
    });
  }
});
var arr = [
  {
    name: "Julie Martel",
    img_url:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-julie@1x.png",
    improvement: "LOST 71 LB (35%) AND MAINTAINED AFTER 492 DAYS.",
    exp_at: ` "My life changed.
        My life is beautiful!
        I am beautiful!!!"`,
  },
  {
    name: "Carrie Hammond",
    img_url:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-carrie@1x.png",
    improvement: `LOST AND MAINTAINED 103 LBS (40%)
        AFTER 616 DAYS.`,
    exp_at: `"I love having a desire to go out and experience new things without worrying about if I'm too fat to do something."`,
  },
  {
    name: "Paul Reynolds",
    img_url:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/success-paul-reynolds@1x.png",
    improvement: `LOST 50LB (22%) AND MAINTAINED
        AFTER 345 DAYS.`,

    exp_at: `“The ability to track using MyNetDiary has been so important.” `,
  },
  {
    name: "Joe Balfe",
    img_url:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-joe@1x.png",
    improvement: `LOST 65LB (20%) AND MAINTAINED
        AFTER 216 DAYS.`,
    exp_at: `“MyNetDiary helps me know exactly how many calories I consume.”`,
  },
  {
    name: "Rick White",
    img_url:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/success-rick-white@1x.png",
    improvement: `LOST 91 LB (30%) AND MAINTAINED
        AFTER 881 DAYS.`,
    exp_at: `“I went body surfing for 4 hours straight with my 28 year old son and felt great!”`,
  },
  {
    name: "Mathew Warner",
    img_url:
      "https://s3.amazonaws.com/img.mynetdiary.com/images/success-matthew-warner@1x.png",
    improvement: `LOST 29LB (14%) AND MAINTAINED
        AFTER 379 DAYS.`,
    exp_at: `“I used your product religiously for two years and it made a huge difference in my health and happiness.”`,
  },
];
var index = 0;
console.log(arr[index]);
function display(ind) {
  document.getElementById("main").innerHTML = "";
  var card = document.createElement("div");
  card.setAttribute("class", "card");
  var slide1 = document.createElement("div");
  slide1.setAttribute("class", "slide1");
  var prev = document.createElement("div");
  prev.setAttribute("class", "prev");
  var text = document.createElement("p");
  text.innerText = "🔺";
  prev.appendChild(text);
  slide1.appendChild(prev);
  var image = document.createElement("div");
  image.setAttribute("class", "image");
  var img = document.createElement("img");
  img.src = arr[ind].img_url;
  var name = document.createElement("p");
  name.setAttribute("class", "name");
  name.innerText = arr[ind].name;
  var result = document.createElement("p");
  result.setAttribute("class", "result");
  result.innerText = arr[ind].improvement;
  var exp = document.createElement("p");
  exp.setAttribute("class", "exp");
  exp.innerText = arr[ind].exp_at;
  var readMore = document.createElement("button");
  readMore.setAttribute("class", "readMore");
  readMore.innerText = "READ SUCCESS STORY   🔺";
  var details = document.createElement("div");
  details.setAttribute("class", "details");
  var slide2 = document.createElement("div");
  slide2.setAttribute("class", "slide2");
  var next = document.createElement("div");
  next.setAttribute("class", "next");
  var text = document.createElement("p");
  text.innerText = "🔺";
  next.appendChild(text);
  slide2.appendChild(next);
  image.append(img);
  details.append(name, result, exp, readMore);
  card.append(slide1, image, details, slide2);
  prev.addEventListener("click", () => {
    ind = (ind + 5) % 6;
    display(ind);
  });
  next.addEventListener("click", () => {
    ind = (ind + 1) % 6;
    display(ind);
  });
  document.getElementById("main").append(card);
}
display(index);
