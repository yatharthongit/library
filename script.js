let myLibrary = [];
const sect=document.querySelector(".section");

function Book(title,author,pages,read){

    this.id=crypto.randomUUID();
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

Book.prototype.status=function(){
    this.read=!this.read;
}

function addBookToLibrary(title,author,pages,read){
    const bookDetails= new Book(title,author,pages,read);
    myLibrary.push(bookDetails);
    displayBooks();

}

function displayBooks(){

    sect.innerHTML = "";
    
    myLibrary.forEach(book => {
        const card=document.createElement("div");
        card.classList.add("card");

        card.innerHTML=`<h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>`;

        const label=document.createElement("label");
        label.for="check";
        label.innerHTML=`<p><strong>Read:</strong></p>`;
        const checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.name="check";
        book.read?checkbox.checked=true:checkbox.checked=false;

        const button=document.createElement("button");    
        button.textContent="Delete";
        button.setAttribute("data-id",book.id);

        button.addEventListener("click",()=>{
            deleteBook(book.id)
    });
        const readBlock=document.createElement("div");
        readBlock.appendChild(label);
        readBlock.appendChild(checkbox);
        card.appendChild(readBlock);
        card.appendChild(button);
        sect.appendChild(card);
        
    });
}



const addButton=document.querySelector(".addButton");
const pop=document.getElementById("popup");
const confirm=document.getElementById("confirm");
const form=document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");


addButton.addEventListener("click",()=>{
    pop.showModal();
});

confirm.addEventListener("click",(event)=>{
    event.preventDefault();

     const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;

    addBookToLibrary(title, author, pages, read);
    form.reset();
    pop.close();
})


function deleteBook(bookId){
    myLibrary=myLibrary.filter(book=>book.id!==bookId);
    displayBooks();
}



