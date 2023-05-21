{
    const welcome = () => {
        console.log("Witam developerów! Nie mam pojecia co sie dzieje ");

    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeColor = document.querySelector(".darkBackground");
        
        body.classList.toggle("darkBackground");
        buttonBackground.innerText = body.classList.contains("darkBackground") ? "☀️" : "🌙";

    }

    const init = () => {
        const buttonBackground = document.querySelector(".buttonBackground");
        buttonBackground.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}