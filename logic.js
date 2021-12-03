let myLibrary = [];

function Book (title, author, pages, beenRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
}

Book.prototype.info = function () {
    console.log(this.title + " is written by " + this.author + ". It is " + this.pages + " long, and it has " + this.beenRead);
}

const fightClub = new Book("Fight Club", "Chuck", "180", "been read");
console.log(fightClub.info());

function addBookToLibrary () {

}

function displayForm () {
    document.getElementById('form1').style.display = 'block';
}

function hideForm () {
    document.getElementById('form1').style.display = 'none';
}


const addBook = document.querySelector("#addbook");
addBook.addEventListener('click', displayForm);

const submitButton = document.querySelector("#submitbutton");
submitButton.addEventListener('click', hideForm);

// function displayForm () {
//     shownForm = document.querySelector("#addBook");
//     shownForm.style.display = "block";
// }

// const formButton = document.querySelector("#formSubmit");
// formButton.addEventListener('click', displayForm());