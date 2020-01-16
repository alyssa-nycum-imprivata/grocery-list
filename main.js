console.log("Hello World!");

const four = 2 + 2;
console.log(four);

const groceriesArticle = document.querySelector("#groceries");
groceriesArticle.classList.add("red-text");

const groceriesHeader = document.querySelector(".groceries_header");
groceriesHeader.classList.remove("groceries_header");

// Get all the list items in the grocery list
const groceryList = document.querySelectorAll("#grocery-list li");
// console.log(groceryList);
// Loop over each list item and add the groceries_header class to it
for (let i = 0; i < groceryList.length; i++) {
    if (i === 1) {
    groceryList[i].classList.add("groceries_header");
    }
}


