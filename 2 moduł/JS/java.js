console.log("Cześć witam bardzo serdecznie<br> mam nadzieje ze dam rade sie nauczyc programować!");

let przycisk = document.querySelector(".przycisk");
let photo = document.querySelector(".photo")
przycisk.addEventListener("click", () => {
    photo.remove();
})

console.log(przycisk);
