let number = document.getElementById("number");
var icon = document.getElementById("icon");
let counter = 0;

setInterval(() => {
  if (counter === 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 30);

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
