const library = [];
// isbn, title, author, year
addBook.onclick = function () {
    // TODO task 1 get data from inputs, and put book in <ol id="result"></ol>
    // check is book unique

    if (findBook(library, isbn.value.trim()) === -1) {
        const book = new Book(isbn.value.trim(), title.value.trim(), author.value.trim(), year.value);
        library.push(book);
        const li = document.createElement("li");
        const btnDel = document.createElement('button');
        btnDel.append("X");
        btnDel.style.color = "red";
        btnDel.style.marginLeft = "5px";
        btnDel.addEventListener("click", function (e) {
            const isbnn = e.target.parentElement.innerText.split(",")[0].substring(6);
            library.splice(findBook(library, isbnn), 1);
            e.target.parentElement.remove();
        });
        li.append(book.toString(), btnDel);
        result.append(li);

    }
    isbn.value = "";
    title.value = "";
    author.value = "";
    year.value = "";

    // TODO task 2 advanced: implements remove book functionality
    // NB! after remove book, we have possibility to add book with same isbn
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
    }
}