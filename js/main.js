/* eslint-disable */
const bookList = document.querySelector('#bookList');
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#title');
const arthur = document.querySelector('#arthur');
let bookObj = [];
const addNewTab = document.querySelector('#addNew')
const listTab = document.querySelector('#list')
const contactTab = document.querySelector('#contact')
const header = document.querySelector('#header')
header.addEventListener('click',function(e) {
if(e.target.id === 'listTab') {
 addNewTab.classList.add('removeDisplay')
 contactTab.classList.add('removeDisplay')
 listTab.classList.remove('removeDisplay')
}
else if(e.target.id === 'addNewTab') {
  addNewTab.classList.remove('removeDisplay')
  listTab.classList.add('removeDisplay')
 contactTab.classList.add('removeDisplay')
}
else if(e.target.id === 'contactTab') {
  contactTab.classList.remove('removeDisplay')
  listTab.classList.add('removeDisplay')
 addNewTab.classList.add('removeDisplay')
}
})
class Books {
  constructor(bookTitle,arthur,id) {
    this.bookTitle = bookTitle,
    this.arthur = arthur,
    this.id = id
  }
}
class BookObj {
 static  loop() {
    let objVar = '';
    for (let i = 0; i < bookObj.length; i += 1) {
      objVar += `<li id='lanzz'><p><span>${bookObj[i].bookTitle}</span> by <span>${bookObj[i].arthur}</span> </p> <button onclick = 'BookObj.removeBook(this.id)' id=${bookObj[i].id.toString()}>Remove</button></li>`;
    }
    bookList.innerHTML = objVar;
  }

  static  removeBook(id) {
     filteredArr = bookObj.filter((item) => item.id !== id);
     bookObj = filteredArr;
     BookObj.loop();
     localStorage.setItem('inputArr', JSON.stringify(bookObj));
   }
}
 
addBtn.addEventListener('click', () => {
  if (title.value) {
    const titleValue = title.value;
    const arthurValue = arthur.value;
    const newBook = new Books(titleValue,arthurValue)
    bookObj.push(newBook);
    let objVar = '';
    for (let i = 0; i < bookObj.length; i += 1) {
      bookObj[i].id = (i + 1).toString();
      objVar += `<li id='lanzz'><p><span>${bookObj[i].bookTitle}</span> by <span>${bookObj[i].arthur}</span> </p> <button onclick = 'BookObj.removeBook(this.id)' id=${bookObj[i].id.toString()}>Remove</button></li>`;
    }
    bookList.innerHTML = objVar;
    localStorage.setItem('inputArr', JSON.stringify(bookObj));
  }
});
let filteredArr = '';
const outputArr = JSON.parse(localStorage.getItem('inputArr'));
if (outputArr) {
  bookObj = outputArr;
} else if (filteredArr) {
  bookObj = filteredArr;
}
BookObj.loop();
