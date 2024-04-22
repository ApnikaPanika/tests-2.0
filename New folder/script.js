const poga = document.querySelector(".js-poga");

let number = 10;

poga.addEventListener("click", () => {
    number = number - 1

    if(number > 0){
        poga.textContent = `Nospied mani vēl ${number}x`
    } else {
        window.open("https://youtu.be/dQw4w9WgXcQ?si=2H2PgZ2r5FH6Bj6e")
    }
})