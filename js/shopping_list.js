class ShoppingList {
    constructor() {
        this.list = [];
    }

    addItem(item) {
        this.list.push(item);
        this.printList();
    }

    printList() {
        let list = document.getElementById("list");

        list.innerHTML = '';

        for (let item of this.list) {
            console.log(item.name);

            let div = document.createElement("div");
            div.classList.add("item");

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            if (item.added) {
                checkbox.setAttribute("checked");
            }

            div.appendChild(checkbox);

            let span = document.createElement("span");
            span.innerHTML = item.amount;

            div.appendChild(span);

            span = document.createElement("span");
            span.innerHTML = item.name;

            div.appendChild(span);

            list.appendChild(div);

        }
        /*
                <div class="item">
            <input type="checkbox"> <span>1</span> <span>Gurka</span>
        </div>
        <div class="item">
            <input type="checkbox"> <span>2</span> <span>Tomat</span>
        </div>
        <div class="item">
            <input type="checkbox"> <span>4</span> <span>Bröd</span>
        </div>

        */
    }
}
