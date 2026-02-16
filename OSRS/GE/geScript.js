function updateShoppingList(items) {
    const shoppingList = document.getElementById("shopping-list");

    if (items.length === 0) {
        shoppingList.innerHTML = "<tr><td colspan='3'>No items found.</td></tr>";
    } else {
        items.forEach(item => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${item[0]}</td><td>${item[1].price}</td><td>${item[1].volume}</td>`;
            shoppingList.appendChild(tr);
        });
    }
}

function fetchGEData() {
    // Simulate fetching data from the Grand Exchange API
    fetch("https://api.weirdgloop.org/exchange/history/osrs/latest?name=Rune Scimitar|Air rune")
        .then(response => response.json())
        .then(data => {
            //{"Rune scimitar":{"id":"1333","timestamp":"2026-02-16T05:58:20.000Z","price":15120,"volume":54661}}
            console.log(data); // Log the fetched data for debugging
            items = [];
            for (const item in data) {
                items.push([item, data[item]]);
            }
            // Update the shopping list with the fetched item
            updateShoppingList(items);
        })
        .catch(error => {
            console.error("Error fetching GE data:", error);
        });

}

window.onload = function() {
    fetchGEData();
}