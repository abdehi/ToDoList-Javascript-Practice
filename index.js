const addInput = document.querySelector("#addInput");
const btnAdd = document.querySelector("#btnAdd");
const divList = document.querySelector(".listHolder");

function addLists() {
  if (addInput.value === "") {
    alert("Enter the list name please!!!");
  } else {
    const ul = divList.querySelector("ul");
    const li = document.createElement("li");

    li.innerHTML = addInput.value;
    addInput.value = "";
    ul.appendChild(li);
  }
}

// add list when clicked on add item button
btnAdd.addEventListener("click", () => {
  addLists();
});

// add list when pressed enter
addInput.addEventListener("keyup", (event) => {
  if (event.which === 13) {
    addLists();
  }
});
