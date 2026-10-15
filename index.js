var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");

myForm.addEventListener("submit", function(event){
    event.preventDefault();
    createItem(myForm.value)
})

function createItem(InputItems){
    var items =  `<li>${InputItems}
    <button onclick= "deleteElement(this)">Delete</button> </li>`
    myItem.insertAdjacentHTML("beforeend", items)
    myInput.value = ""
    myInput.focus()
}

function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}