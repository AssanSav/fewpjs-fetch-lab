function fetchBooks() {
  let getApi = fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(json => renderBooks(json));
  return getApi
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h1>Author: ${book.authors}<h1><h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
