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

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const cardContainer = document.querySelector(".card-container");
// Create cards for each book
function loopLibrary() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cardContainer.appendChild(card);

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
  });
}

loopLibrary();
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
  cards.forEach(card => {
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
});

