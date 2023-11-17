const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
};

const addBookButton = document.querySelector("#addBook");
const libraryTable = document.querySelector("table");
const bookFormDialog = document.querySelector("#bookForm");
const submitButton = document.querySelector("#submitButton");

/*  accept user input
    add book details to library array
*/
addBookButton.addEventListener("click", () => {
    bookFormDialog.showModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    bookFormDialog.close();
});

bookFormDialog.addEventListener("close", (e) => {
    let bookTitle = document.querySelector("#bookTitle").value;
    let bookAuthor = document.querySelector("#bookAuthor").value;
    let bookPageCount = document.querySelector("#bookPageCount").value;
    let bookRead = document.querySelector("#bookRead").value;

    let newBook = addBook(bookTitle, bookAuthor, bookPageCount, bookRead);
    addBookToLibrary(newBook);
});


function addBook(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
};

/*function addBookToLibrary() {
    myLibrary.forEach(function(book) {
        const newRow = libraryTable.insertRow();
        const rowData = [book.title, book.author, book.pages, book.isRead];
        rowData.forEach(function(cellData) {
            const cell = newRow.insertCell();
            cell.innerHTML = cellData;
        });
    }); 
};*/

function addBookToLibrary(book) {
    const newRow = libraryTable.insertRow();
    const rowData = [book.title, book.author, book.pages, book.isRead];
    rowData.forEach(function(cellData) {
        const cell = newRow.insertCell();
        cell.innerHTML = cellData;
    });
};
