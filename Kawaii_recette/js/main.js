let cards = document.querySelectorAll(".card");

cards.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "pink";
    });
});

cards.forEach(div => {
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "white";
    });
});
cards.forEach(div => {
    div.addEventListener("click", () => {
        div.style.boxShadow = "7px 7px pink"; 
    });
});
cards.forEach(div => {
    div.addEventListener("dblclick", () => {
        div.remove()
    });
});
let button = document.querySelector("#newsletter");

button.addEventListener("click", () => {
    let email = document.querySelector("#inputEmail").value; {
        alert("L'adresse : " + email + " est inscrite à la newsletter.");
    }
});
