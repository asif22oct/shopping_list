document.addEventListener("DOMContentLoaded", function(e) {
    let shopping_list = new ShoppingList();

    let btnAdd = document.getElementById("btnAdd");
    let new_item = document.getElementById("new_item");

    btnAdd.addEventListener("click", function(e) {
        let item = new ShoppingListItem(new_item.value);

        shopping_list.addItem(item);
    })
});


