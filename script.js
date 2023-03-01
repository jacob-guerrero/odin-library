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
/* const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "yes");
myLibrary.push(theHobbit);
myLibrary.push(theHobbit); */
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
    const readBtn = document.createElement("button");
    spanRead.textContent = "Read: ";
    read.setAttribute("class", "read");
    readBtn.textContent = `${book.read}`;
    readBtn.setAttribute("class", "read-btn");
    read.prepend(spanRead);
    read.appendChild(readBtn);
    card.appendChild(read);

    /* Assign an id for each close book */
    close.dataset.idBook = index;
    index += 1;
  });
}

let toggleBtns;
loopLibrary();
updateCards();
updateToggle();

/* Show-Hide Form */
document.querySelector(".show-options").addEventListener("click", () => {
  if (document.getElementById("myForm").style.display === "block") {
    document.getElementById("myForm").classList.add("out");
    document.getElementById("myForm").classList.remove("active");
    document.querySelector(".show-options").classList.remove("active");
    setTimeout(() => {
      document.getElementById("myForm").style.display = "none";
    }, 300);
    return;
  }
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm").classList.add("active");
  document.querySelector(".show-options").classList.add("active");
  document.getElementById("myForm").classList.remove("out");
});

document.querySelector(".hide-options").addEventListener("click", () => {
  document.getElementById("myForm").classList.add("out");
  document.getElementById("myForm").classList.remove("active");
  document.querySelector(".show-options").classList.remove("active");
  setTimeout(() => {
    document.getElementById("myForm").style.display = "none";
  }, 300);
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
    document.querySelector("input[name='read']:checked").value
  );

  addBookToLibrary(newBook);
  removeCards();
  loopLibrary();

  /* Update Cards */
  updateCards();
  updateToggle();
});

/* Update Cards (close button) */
function updateCards() {
  let closeCards;
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
      updateToggle();
      return;
    }
  }
}

/* Toggle btn */
function updateToggle() {
  let toggled;
  toggleBtns = document.querySelectorAll(".read-btn");
  for (let i = 0; i < toggleBtns.length; i += 1) {
    toggleBtns[i].id = `${i}`;
  }
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      toggled = e.target.id;
      toggleThis(toggled);
    });
  });
}

function toggleThis(toggled) {
  for (let i = 0; i < toggleBtns.length; i += 1) {
    if (i === +toggled && myLibrary[i].read === "yes") {
      myLibrary[+toggled].read = "no";
      toggleBtns[i].textContent = "no";
      return;
    }
    if (i === +toggled && myLibrary[i].read === "no") {
      myLibrary[+toggled].read = "yes";
      toggleBtns[i].textContent = "yes";
      return;
    }
  }
}

// Change toggle text in loopLibrary (if)
