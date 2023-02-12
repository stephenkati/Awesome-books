const bookList = document.querySelector('#bookList');
const addBtn = document.querySelector('#addBtn')
const title = document.querySelector('#title')
const arthur = document.querySelector('#arthur')

let bookObj = [
   
]
addBtn.addEventListener('click',function(){
    if(title.value) {
    let titleValue = title.value
    let arthurValue = arthur.value
    const newBook = new Object()
     newBook.bookTitle = titleValue
     newBook.arthur = arthurValue
     bookObj.push(newBook)
     let objVar = ''
     for(let i = 0;i < bookObj.length;i+=1) {
        objVar += `<li><p><span>${bookObj[i].bookTitle}</span> by <span>${bookObj[i].arthur}</span> </p> <button>Remove</button></li>`
     }
     bookList.innerHTML = objVar
     localStorage.setItem('inputArr',JSON.stringify(bookObj))
    }
})
const outputArr = JSON.parse(localStorage.getItem('inputArr'))
if(outputArr) {
   bookObj = outputArr
}
objVar = ''
for(let i = 0;i < bookObj.length;i+=1) {
    objVar += `<li><p><span>${bookObj[i].bookTitle}</span> by <span>${bookObj[i].arthur}</span> </p> <button>Remove</button></li>`
 }
 bookList.innerHTML = objVar