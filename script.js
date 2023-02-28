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

// ------------ Ex purposes only
const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);
myLibrary.push(theHobbit);
myLibrary.push(theHobbit);
// ----------- Ex purposes only

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const cardContainer = document.querySelector(".card-container");
// Create cards for each book
function loopLibrary() {
  let index = 0;
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cardContainer.appendChild(card);

    const close = document.createElement("span");
    close.textContent = "close";
    close.classList.add("material-symbols-outlined", "close");
    card.appendChild(close);

    const title = document.createElement("h2");
    title.setAttribute("class", "book-title");
    title.textContent = `${book.title}`;
    card.appendChild(title);

    const author = document.createElement("p");
    const spanAuthor = document.createElement("span");
    spanAuthor.textContent = "Author: ";
    author.setAttribute("class", "author");
    author.textContent = `${book.author}`;
    author.prepend(spanAuthor);
    card.appendChild(author);

    const pages = document.createElement("p");
    const spanPages = document.createElement("span");
    spanPages.textContent = "Pages: ";
    pages.setAttribute("class", "pages");
    pages.textContent = `${book.pages}`;
    pages.prepend(spanPages);
    card.appendChild(pages);

    const read = document.createElement("p");
    const spanRead = document.createElement("span");
    spanRead.textContent = "Read: ";
    read.setAttribute("class", "read");
    read.textContent = `${book.read}`;
    read.prepend(spanRead);
    card.appendChild(read);

    /* Assign an id for each close book */
    close.dataset.idBook = index;
    index += 1;
  });
}

loopLibrary();
let closeCards;
updateCards();
console.log(myLibrary[0]);

/* Show-Hide Form */
document.querySelector(".show-options").addEventListener("click", () => {
  document.getElementById("myForm").style.display = "block";
});
document.querySelector(".hide-options").addEventListener("click", () => {
  document.getElementById("myForm").style.display = "none";
});

/* Remove Cards */
function removeCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });
}

/* Add New Books */
document.querySelector(".add-book").addEventListener("click", (e) => {
  e.preventDefault();
  const newBook = new Book(
    document.querySelector("#title").value,
    document.querySelector("#author").value,
    document.querySelector("#pages").value,
    document.querySelector("#read").value
  );

  addBookToLibrary(newBook);
  removeCards();
  loopLibrary();

  /* Update Cards */
  updateCards();
});

/* Update Cards (close button) */
function updateCards() {
  let closedBook;
  closeCards = document.querySelectorAll(".close");
  closeCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      closedBook = e.target.dataset.idBook;
      removeBook(closedBook);
    });
  });
}

/* Remove Book */
function removeBook(closedBook) {
  for (let i = 0; i < myLibrary.length; i += 1) {
    if (i === +closedBook) {
      myLibrary.splice(i, 1);
      removeCards();
      loopLibrary();
      updateCards();
      return;
    }
  }
}
