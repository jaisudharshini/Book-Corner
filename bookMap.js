//select popup-overlay,pop-up, + button

var addbutton=document.getElementById("add-button-pop");
var popupoverlay=document.querySelector(".screen-overlay");
var popupbox=document.querySelector(".popup-box");

addbutton.addEventListener("click", function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

//select cancel button

var cancelbutton=document.getElementById("cancel-button");

cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none";
})

//select container,add-button,"book-name","book-author","book-description"

const container=document.querySelector(".container");
const addbut=document.getElementById("add-button");
const bookname=document.getElementById("book-name");
const bookauthor=document.getElementById("book-author");
const bookdescription=document.getElementById("book-description");

addbut.addEventListener("click",function(event){
    event.preventDefault();
    const div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${bookname.value}</h2>
    <h5> ${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick='deleteval(event)'>Delete</button>`;

    container.append(div);
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})

function deleteval(event){
    event.target.parentElement.remove();
}