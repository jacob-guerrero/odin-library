let myLibrary = [];

// Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.info = function () {
  // Don't use arrow function because the context of 'this' is window
  return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
};

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);

function addBookToLibrary() {
  myLibrary.push(theHobbit);
  myLibrary.push(theHobbit);
}
addBookToLibrary();

const cardContainer = document.querySelector(".card-container");

function loopLibrary() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cardContainer.appendChild(card);

    const title = document.createElement("h2");
    title.setAttribute("class", "book-title");
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement("p");
    author.setAttribute("class", "author");
    author.textContent = book.author;
    card.appendChild(author);

    const pages = document.createElement("p");
    pages.setAttribute("class", "pages");
    pages.textContent = book.pages;
    card.appendChild(pages);

    const read = document.createElement("p");
    read.setAttribute("class", "read");
    read.textContent = book.read;
    card.appendChild(read);
  });
}

loopLibrary();
console.log(myLibrary[0]);
