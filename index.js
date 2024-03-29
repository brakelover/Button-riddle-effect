const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    while (randomColor === '#ffc0cb') {
        randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
    btnEl.style.setProperty("--ranCol", "#" + randomColor);
})

btnEl.addEventListener("mouseout", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos2", x + "px");
    btnEl.style.setProperty("--yPos2", y + "px");
})

/*
let xr = Math.floor(Math.random() * 256);
let yr = Math.floor(Math.random() * 256);
let zr = Math.floor(Math.random() * 256);
let ranCol = "rgb(" + x + "," + y + "," + z + ")";

btnEl.style.setProperty("--ranCol", ranCol);
*/