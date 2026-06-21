// CURRENTLY READING

document.getElementById("current-cover").src =
  currentBook.cover;

document.getElementById("current-cover").alt =
  currentBook.title;

document.getElementById("current-title").textContent =
  currentBook.title;

document.getElementById("current-author").textContent =
  currentBook.author;

document.getElementById("current-pages").textContent =
  `${currentBook.pagesRead} / ${currentBook.totalPages} páginas`;

document.getElementById("current-progress").textContent =
  `${currentBook.progress}%`;

document.getElementById("progress-fill").style.width =
  `${currentBook.progress}%`;


// LAST READ

document.getElementById("last-cover").src =
  lastRead.cover;

document.getElementById("last-cover").alt =
  lastRead.title;

document.getElementById("last-title").textContent =
  lastRead.title;

document.getElementById("last-author").textContent =
  lastRead.author;

document.getElementById("last-rating").textContent =
  lastRead.rating;

document.getElementById("last-comment").textContent =
  `"${lastRead.comment}"`;
