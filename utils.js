function createButtonDel(callback) {
    const btnDel = document.createElement('button');
    btnDel.append("X");
    btnDel.style.color = "red";
    btnDel.style.marginLeft = "5px";
    btnDel.addEventListener("click", e => {
        e.target.parentElement.remove();
        if (typeof callback === "function") {
            callback();
        }
    });
    return btnDel;
}

function statusb() {
    if (library.length) {
    if (stats.children.length === 1) {
        const pMin = document.createElement("p");
        pMin.innerHTML = `Min year of publishing: ${library.map(b => b.year).reduce((min, b) => b < min ? b : min)}`;
        pMin.id = "pMin";
        const pMax = document.createElement("p");
        pMax.innerHTML = `Max year of publishing: ${library.map(b => b.year).reduce((max, b) => b > max ? b : max)}`;
        pMax.id = "pMax";
        const pAverage = document.createElement("p");
        pAverage.innerHTML = `Average year of publishing: ${Math.round(library.reduce((acc, b) => acc + b.year, 0) / library.length)}`;
        pAverage.id = "pAverage";
        const pNumbers = document.createElement("p");
        pNumbers.innerHTML = `Number of books: ${library.length}`;
        pNumbers.id = "pNumbers";
        stats.append(pMin, pMax, pAverage, pNumbers);
    } else {

            pMin.innerHTML = `Min year of publishing: ${library.map(b => b.year).reduce((min, b) => b < min ? b : min)}`;
            pMax.innerHTML = `Max year of publishing: ${library.map(b => b.year).reduce((max, b) => b > max ? b : max)}`;
            pAverage.innerHTML = `Average year of publishing: ${Math.round(library.reduce((acc, b) => acc + b.year, 0) / library.length)}`;
           pNumbers.innerHTML = `Number of books: ${library.length}`;

    } }else {
            pMin.innerHTML = `Min year of publishing: 0`;
            pMax.innerHTML = `Max year of publishing: 0`;
            pAverage.innerHTML = `Average year of publishing: 0`;
            pNumbers.innerHTML = `Number of books: ${library.length}`;

        }



}