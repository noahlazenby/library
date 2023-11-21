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
        let cell = newRow.insertCell();
        cell.innerHTML = cellData;
    });

    /* add delete button to row */
    let button = document.createElement("button");
    let td = document.createElement("td");
    button.innerText = "Delete";
    button.id = "deleteButton";
    button.setAttribute('data-row', newRow.rowIndex);
    button.setAttribute('data-index', myLibrary.indexOf(book));
    td.append(button);
    newRow.append(td);

    /* add change read status button */
    let button2 = document.createElement("button");
    let td2 = document.createElement("td");
    let cells = newRow.cells;
    button2.innerText = "Change Read Status";
    button2.id = "changeReadStatusButton";
    button2.setAttribute('data-row', newRow.rowIndex);
    button2.setAttribute('data-index', myLibrary.indexOf(book));
    td2.append(button2);
    newRow.append(td2);
    button2.addEventListener("click", () => {
        if (myLibrary[button2.dataset.index].isRead == "no") {
            myLibrary[button2.dataset.index].isRead = "yes";
        } else {
            myLibrary[button2.dataset.index].isRead = "no";
        };
        cells[3].innerHTML = myLibrary[button2.dataset.index].isRead;
    });

    /* delete functionality */ 
    button.addEventListener("click", () => {
        libraryTable.deleteRow(button.dataset.row);
        myLibrary.splice(button.dataset.index,1);
    });
};
