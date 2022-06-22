function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
// .then(json => console.log(json[5].name)); //Fifth Book
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


// function fetchCharacters(n) {
//   return fetch(`https://anapioficeandfire.com/api/characters/${n}`)
//   .then(resp => resp.json())
//   .then(json => console.log(json.name))
// }

// fetchCharacters(1031);

function pages () {
  return fetch('https://anapioficeandfire.com/api/books')
  .then (resp => resp.json())
  .then (books => {
    let total = 0;
    books.forEach(book => {
      total = total + book.numberOfPages;
    })
    console.log(total);
  });
}
pages();