const container = document.querySelector("#container");

function generateGrid(x) {
    for (let i = 0; i < x; i++) {
        const row = document.createElement("div");
        row.classList.add("row"); 
        for (let j = 0; j < x; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener('mouseover', e => square.style.background = "black");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

generateGrid(16);

document.getElementById("popup").addEventListener('click', e => {
    let dimension = prompt("What square grid dimensions would you like (Enter one dimension)");
    if (dimension >= 0 && dimension <= 100) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
          }
        generateGrid(dimension);
    } else {
        let dimension = alert("Invalid Value");
    }
});