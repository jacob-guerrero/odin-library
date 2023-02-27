let myLibrary = [];

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

function addBookToLibrary() {
  // do stuff here
}

const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);

console.log(theHobbit.info());
