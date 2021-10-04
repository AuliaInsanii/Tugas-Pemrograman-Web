//selectors
const itemInput = document.querySelector(".item-input");
const itemButton = document.querySelector(".item-button");
const itemList = document.querySelector(".item-list");
const btnAdd = document.getElementById('btn-add-item');

//event listeners
itemButton.addEventListener('click', addItem);
itemList.addEventListener('click', deleteCheck);

//function
function addItem(event) {

    //prevent form from submitting
    event.preventDefault();

    //Todo DIV
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    //create li
    const newItem = document.createElement('li');
    newItem.innerText = itemInput.value;
    newItem.classList.add('item-item');
    itemDiv.appendChild(newItem);
    itemInput.focus();

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    itemDiv.appendChild(completedButton);

    //check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    itemDiv.appendChild(trashButton);

    if(itemInput.value === "") {
        alert("Item can not empty");
        itemInput.focus();
        return false;
      }  

    //append to list
    itemList.appendChild(itemDiv);

    //clear todo input value
    itemInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    //delete todo
    if (item.classList[0] === 'trash-btn') {
        const item2 = item.parentElement;
        item2.remove();
    }

    //check mark
    if (item.classList[0] === "complete-btn") {
        const item2 = item.parentElement;
        item2.classList.toggle("completed");
    }
}

