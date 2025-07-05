let myLibrary = [];
const sect=document.querySelector(".section");

function Book(title,author,pages,read){

    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(title,author,pages,read){
    const bookDetails= new Book(title,author,pages,read);
    myLibrary.push(bookDetails);
    displayBooks();
}

function displayBooks(){
    
    for(const book of myLibrary){
        
        const card=document.createElement("div");
        card.classList.add("card");

        card.textContent=book.title;
        sect.appendChild(card);
    }
}

const addButton=document.querySelector(".addButton");
const pop=document.getElementById("popup");
const confirm=document.getElementById("confirm");
const title=document.getElementsByName("title");
const author=document.getElementsByName("author");
const pages=document.getElementsByName("pages");
const read=document.getElementsByName("read");


addButton.addEventListener("click",()=>{
    pop.showModal();
});

confirm.addEventListener("click",(event)=>{
    event.preventDefault();
    pop.close(title.values,author.values,pages.values,read.value);
    addBookToLibrary(title,author,pages,read);
})



