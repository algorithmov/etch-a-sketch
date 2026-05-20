const container = document.querySelector("#container");

for (let i = 0; i < 100; i++) {
    const row = document.createElement("div");
    row.classList.add("row"); 
    for (let j = 0; j < 100; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener('mouseover', e => square.style.background = "black");
        row.appendChild(square);
    }
    container.appendChild(row);
}
