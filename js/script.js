document.addEventListener("DOMContentLoaded", function(e) {
    let shopping_list = new ShoppingList();

    let btnAdd = document.getElementById("btnAdd");
    let new_item = document.getElementById("new_item");

    btnAdd.addEventListener("click", function(e) {
        let item = new ShoppingListItem(new_item.value);

        shopping_list.addItem(item);
    })

    let list = document.getElementById("list");
    list.addEventListener("click", function(e) {
        let current_item = shopping_list.list[e.target.parentNode.id];
        current_item.added = true;

        shopping_list.printList();
    })
});


