const library = [];

addBook.onclick = function () {
    if (library.findIndex(b => b.isbn === isbn.value.trim()) === -1 && isbn.value.trim() !== "") {
        const book = new Book(isbn.value.trim(), title.value.trim(), author.value.trim(), year.value);
        library.push(book);
        const li = document.createElement("li");
        const btnDel = createButtonDel(() => {
            library.splice(library.findIndex(b => b.isbn === book.isbn), 1);
            statusb();
        });
        li.append(book.toString(), btnDel);
        result.append(li);
        statusb();


    } else {
        alert(`Book with isbn = ${isbn.value} exists or ISBN is absent`);
    }
    isbn.value = title.value = author.value = year.value = '';

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