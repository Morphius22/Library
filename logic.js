//Array which will contain all added Books.
let myLibrary = [];

//Object constructor for books that will be added into the myLibrary array.
function Book (title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
}

//Adds a prototype function for Book that displays book info
Book.prototype.info = function () {
    console.log(this.title + " is written by " + this.author + ". It is " + this.pages + " long, and it has " + this.beenRead);
}

//Test book
const fightClub = new Book("Fight Club", "Chuck", "180", "been read");
console.log(fightClub.info());

//Turns the HTML data into a JS Object. Pushes object into myLibrary Array.
function addBookToLibrary(event) {
    event.preventDefault();
    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookPages = document.querySelector("#pages").value;
    let bookRead = document.querySelector("#beenRead").value;
    myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookRead));
    console.log(myLibrary);
    document.querySelector('form').reset();

    displayBook()
    hideForm();
}

//Displays all book objects in the myLibrary array
function displayBook() {
    myLibrary.forEach(book => {
        const container = document.querySelector('.container')
        const newRow = document.createElement('div');
        newRow.classList.add('book_row');
        container.append(newRow)

        const newBookTitle = document.createElement('p');
        newBookTitle.textContent = book.title;
        newBookTitle.classList.add('bookData');
        newRow.appendChild(newBookTitle);

        const newBookAuthor = document.createElement('p');
        newBookAuthor.textContent = book.author;
        newBookAuthor.classList.add('bookData');
        newRow.appendChild(newBookAuthor);

        const newBookPages = document.createElement('p');
        newBookPages.textContent = book.pages;
        newBookPages.classList.add('bookData');
        newRow.appendChild(newBookPages);

        const newBookRead = document.createElement('p');
        newBookRead.textContent = book.beenRead;
        newBookRead.classList.add('bookData');
        newRow.appendChild(newBookRead);

        const removeBookButton = document.createElement('button');
        removeBookButton.textContent = "Remove"
        removeBookButton.classList.add('bookData');
        newRow.appendChild(removeBookButton);

        const changeBookReadButton = document.createElement('button');
        changeBookReadButton.textContent = "I Read It!"
        changeBookReadButton.classList.add('bookData');
        newRow.appendChild(changeBookReadButton);
    })
}

//Displays add book form
function displayForm () {
    document.getElementById('form1').style.display = 'block';
}

//Hides add book form
function hideForm () {
    document.getElementById('form1').style.display = 'none';
}

//When add book button is clicked, the form appears
const addBookButton = document.querySelector("#addbook");
addBookButton.addEventListener('click', displayForm);

//When the submit button is clicked, the addBooktoLibrary function runs
const submitBookButton = document.querySelector("#submitbutton");
submitBookButton.addEventListener('click', e => {
    document.querySelectorAll('.bookData').forEach(item => item.remove());
    addBookToLibrary(e);
});


// const submitBookButton = document.querySelector("#submitbutton");
// submitBookButton.addEventListener('click', addBookToLibrary);

//When the close button is clicked, the form is hidden
const closeButton = document.querySelector("#closebutton");
closeButton.addEventListener('click', hideForm);