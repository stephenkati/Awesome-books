/* eslint-disable */
const bookList = document.querySelector('#bookList');
const addBtn = document.querySelector('#addBtn');
const title = document.querySelector('#title');
const arthur = document.querySelector('#arthur');
let bookObj = [];

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

   static resetfields(){
    document.querySelector('#title').value = ''
    document.querySelector('#arthur').value = ''
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
    BookObj.resetfields()
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

setInterval(()=>{
  let timer = document.getElementById("current-time")
  let htimer;
  const d = new Date();
  day = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'];
  htimer = d.toLocaleTimeString();
  timer.innerHTML =day[d.getDay()]+ ' ' + month[d.getMonth()] +', '+ d.getDate() +' '+ d.getFullYear() + ' '+ htimer;
},1000)