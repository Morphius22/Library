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

function changeRead(index) {
    readStatus = document.querySelectorAll('bookRow')
    readStatus.forEach(row => {
        if (row.dataset.row == index) {
            row.beenRead = "Yes"
        } else {
            row.dataset.row = "No"
        }
    });
};

function consoleData (data) {
    console.log(data);
}

function updateDisplay () {
    document.querySelectorAll('.bookData').forEach(item => item.remove());
    document.querySelectorAll('.bookRow').forEach(item => item.remove());
    displayBook();
}


//Displays all book objects in the myLibrary array
function displayBook() {
    myLibrary.forEach((book, index) => {
        const container = document.querySelector('.container')

        const newRow = document.createElement('div');
        newRow.classList.add('bookRow');
        newRow.setAttribute('data-row', index);
        container.append(newRow)

        //Adds the title of the book to the grid
        const newBookTitle = document.createElement('p');
        newBookTitle.textContent = book.title;
        newBookTitle.classList.add('bookData');
        newBookTitle.setAttribute('data-row', index);
        newRow.appendChild(newBookTitle);

        //Adds the author of the book to the grid
        const newBookAuthor = document.createElement('p');
        newBookAuthor.textContent = book.author;
        newBookAuthor.classList.add('bookData');
        newBookAuthor.setAttribute('data-row', index);
        newRow.appendChild(newBookAuthor);

        //Adds the page count of the book to the grid
        const newBookPages = document.createElement('p');
        newBookPages.textContent = book.pages;
        newBookPages.classList.add('bookData');
        newBookPages.setAttribute('data-row', index);
        newRow.appendChild(newBookPages);

        //adds if the book has been read to the grid
        const newBookRead = document.createElement('p');
        newBookRead.textContent = book.beenRead;
        newBookRead.classList.add('bookData');
        newBookRead.setAttribute('data-row', index);
        newRow.appendChild(newBookRead);

        //adds a button that removes the book from the grid
        const removeBookButton = document.createElement('button');
        removeBookButton.textContent = "Remove"
        removeBookButton.classList.add('bookData','deleteButton');
        removeBookButton.setAttribute('data-row', index);
        newRow.appendChild(removeBookButton);
        removeBookButton.addEventListener('click', e => {
            e.preventDefault();
            myLibrary.splice(e.currentTarget.dataset.row, 1)
            console.log('this is the mylibrary array:' + myLibrary);
            console.log('this is the index position:' + e.currentTarget.dataset.row);
            updateDisplay();
        })

        //adds a button that changes if a book has been read
        const changeBookReadButton = document.createElement('button');
        changeBookReadButton.textContent = "I Read It!"
        changeBookReadButton.classList.add('bookData', 'changeButton');
        changeBookReadButton.id = "changeBookRead"
        changeBookReadButton.setAttribute('data-row', index);
        newRow.appendChild(changeBookReadButton);
        changeBookReadButton.addEventListener('click', e => {
            e.preventDefault();
            myLibrary[e.currentTarget.dataset.row].beenRead = "Yes";
            updateDisplay();
        });

        // const changeReadButtons = document.querySelectorAll('.changeButton');
        // changeReadButtons.forEach(button => button.addEventListener('click', e => {
        //     e.preventDefault();
        //     myLibrary[e.currentTarget.dataset.row].beenRead = "Yes";
        //     updateDisplay();
        // }))

    })
}

//Displays add book form
function displayForm () {
    document.getElementById('form1').style.display = 'block';
    document.querySelector('form').style.display = 'flex';
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
    document.querySelectorAll('.bookRow').forEach(item => item.remove());
    addBookToLibrary(e);
});

//When the close button is clicked, the form is hidden
const closeButton = document.querySelector("#closebutton");
closeButton.addEventListener('click', hideForm);