
console.log("Witam developerów!");
let buttonBackground = document.querySelector(".buttonBackground");
let themeColor = document.querySelector(".darkBackground");
let body = document.querySelector(".body");

buttonBackground.addEventListener("click", () => {
    body.classList.toggle("darkBackground");
    buttonBackground.innerText = body.classList.contains("darkBackground") ? "☀️" : "🌙";

});
