/* eslint no-unused-vars:0 */
const bookList = document.querySelector('#bookList');
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#title');
const arthur = document.querySelector('#arthur');
let bookObj = [];
function loop() {
  let objVar = '';
  for (let i = 0; i < bookObj.length; i += 1) {
    objVar += `<li id='lanzz'><p><span>${bookObj[i].bookTitle}</span> by <span>${bookObj[i].arthur}</span> </p> <button onclick = 'removeBook(this.id)' id=${bookObj[i].id.toString()}>Remove</button></li>`;
  }
  bookList.innerHTML = objVar;
}
addBtn.addEventListener('click', () => {
  if (title.value) {
    const titleValue = title.value;
    const arthurValue = arthur.value;
    const newBook = {};
    newBook.bookTitle = titleValue;
    newBook.arthur = arthurValue;
    bookObj.push(newBook);
    let objVar = '';
    for (let i = 0; i < bookObj.length; i += 1) {
      bookObj[i].id = (i + 1).toString();
      objVar += `<li id='lanzz'><p><span>${bookObj[i].bookTitle}</span> by <span>${bookObj[i].arthur}</span> </p> <button onclick = 'removeBook(this.id)' id=${bookObj[i].id.toString()}>Remove</button></li>`;
    }
    bookList.innerHTML = objVar;
    localStorage.setItem('inputArr', JSON.stringify(bookObj));
  }
});
let filteredArr = '';
function removeBook(id) {
  filteredArr = bookObj.filter((item) => item.id !== id);
  bookObj = filteredArr;
  loop();
  localStorage.setItem('inputArr', JSON.stringify(bookObj));
}
const outputArr = JSON.parse(localStorage.getItem('inputArr'));
if (outputArr) {
  bookObj = outputArr;
} else if (filteredArr) {
  bookObj = filteredArr;
}
loop();