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
