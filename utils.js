function createButtonDel(callback) {
    let btnDel = document.createElement('button');
    btnDel.append("X");
    btnDel.style.color = "red";
    btnDel.style.marginLeft = "5px";
    btnDel.addEventListener("click", ({target}) => {
        target.parentElement.remove();
        if (typeof callback === "function") {
            callback();
        }
    });
    return btnDel;
}

function statusb() {
    const divStatus = document.createElement("div");

    try {
        const pMin = createInfoElement(`Min year of publishing: ${library
            .reduce((min, b) => b.year < min ? b.year : min,library[0].year)}`, 'p');
        const pMax = createInfoElement(`Max year of publishing: ${library
            .reduce((max, b) => b.year > max ? b.year : max,library[0].year)}`, 'p');
        const pAverage = createInfoElement(`Average year of publishing:
         ${Math.round(library.reduce((acc, b) => acc + b.year, 0) / library.length)}`, 'p');
        const pNumbers = createInfoElement(`Number of books: ${library.length}`, 'p');
        divStatus.append(pMin, pMax, pAverage, pNumbers);
    } catch ({message}) {
        console.log(message);
    }
    if (stats.children.length === 1) {
        stats.append(divStatus);
    } else {
        stats.replaceChild(divStatus, stats.firstElementChild.nextElementSibling);
    }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    element.append(content);
    return element;
}
