let cards = document.querySelectorAll(".card");
//pink click

cards.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "pink";
    });
});

// white click
cards.forEach(div => {
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "white";
    });
});

// shadow
cards.forEach(div => {
    div.addEventListener("click", () => {
        div.style.boxShadow = "8px 8px pink"; 
    });
});

// remove card
cards.forEach(div => {
    div.addEventListener("dblclick", () => {
        div.remove()
    });
});

// newsletter
let button = document.querySelector("#newsletter");

button.addEventListener("click", () => {
    let email = document.querySelector("#inputEmail").value; {
        alert("L'adresse : " + email + " est inscrite à la newsletter.");
    }
});

// 1ere lien
let button2 = document.querySelector("#b1");

button2.addEventListener("click", () => {
    window.location.href = "/Kawaii_recette/pages/1.html";
});

// 2eme lien
let button3 = document.querySelector("#b2");

button3.addEventListener("click", () => {
    window.location.href = "/Kawaii_recette/pages/2.html";
});

// 3eme lien
let button4 = document.querySelector("#b3");

button4.addEventListener("click", () => {
    window.location.href = "/Kawaii_recette/pages/3.html";
});

