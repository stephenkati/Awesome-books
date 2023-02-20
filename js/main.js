/* eslint-disable */
const navlist = document.querySelector('#listTab')
const navaddnew = document.querySelector('#addNewTab')
const navcontact = document.querySelector('#contactTab')
const list = document.querySelector('#list')
const addnew = document.querySelector('#addNew')
const contact = document.querySelector('#contact')
const navlink = document.querySelectorAll('.nav-item')

navlink.forEach(link =>{
  link.addEventListener('click', ()=>{
    document.querySelector('.link-color')?.classList.remove('link-color')
    link.classList.add('link-color')
  })
})
navlist.addEventListener('click', (e)=>{
  e.preventDefault()
  list.style.display = 'flex'
  addnew.style.display = 'none'
  contact.style.display = 'none'
})
navaddnew.addEventListener('click', (e)=>{
  e.preventDefault()
  list.style.display = 'none'
  addnew.style.display = 'flex'
  contact.style.display = 'none'
})
navcontact.addEventListener('click', (e)=>{
  e.preventDefault()
  list.style.display = 'none'
  addnew.style.display = 'none'
  contact.style.display = 'block'
})
window.addEventListener('load', (e)=>{
  e.preventDefault()
  list.style.display = 'flex'
  addnew.style.display = 'none'
  contact.style.display = 'none'
})

class Books {
  constructor(title, arthur) {
    this.title = title;
    this.arthur = arthur;
  }
}

class BookCollection {
  constructor() {
    this.bookObj = [];
    this.bookList = document.querySelector('#bookList');
    this.title = document.querySelector('#title');
    this.arthur = document.querySelector('#arthur');
    this.addBtn = document.querySelector('#addBtn');

    if (localStorage.getItem('inputArr')) {
      this.bookObj = JSON.parse(localStorage.getItem('inputArr'));
      this.displayBooks();
    }

    this.addBtn.addEventListener('click', this.newBook.bind(this));
  }

  newBook() {
    const title = this.title.value;
    const arthur = this.arthur.value;
    const book = new Books(title, arthur);
    this.bookObj.push(book);
    this.displayBooks();
    this.storeBook();
    this.title.value = '';
    this.arthur.value = '';
  }

  removeBook(index) {
    this.bookObj.splice(index, 1);
    this.displayBooks();
    this.storeBook();
  }

  displayBooks() {
    this.bookList.innerHTML = '';
    this.bookObj.forEach((book, index) => {
      const bookItem = document.createElement('li');

      const paragraph = document.createElement('p');

      const span1 = document.createElement('span');
      span1.innerHTML = book.title;

      const span2 = document.createElement('span');
      span2.innerHTML = `by ${book.arthur}`;

      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = 'Remove';
      removeBtn.onclick = () => this.removeBook(index);

      paragraph.appendChild(span1);
      paragraph.appendChild(span2);

      bookItem.appendChild(paragraph);
      bookItem.appendChild(removeBtn);

      this.bookList.appendChild(bookItem);
    });
  }

  storeBook() {
    localStorage.setItem('inputArr', JSON.stringify(this.bookObj));
  }
}

const bookCollection = new BookCollection();

setInterval(()=>{
  let timer = document.getElementById("current-time")
  let htimer;
  const d = new Date();
  let day = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
  htimer = d.toLocaleTimeString();
  timer.innerHTML =day[d.getDay()]+ ' ' + month[d.getMonth()] +', '+ d.getDate() +' '+ d.getFullYear() + ' '+ htimer;
},1000)