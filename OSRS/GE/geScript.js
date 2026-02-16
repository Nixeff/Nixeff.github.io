function updateShoppingList(items) {
    const shoppingList = document.getElementById("shopping-list");
    shoppingList.innerHTML = ""; // Clear existing items

    if (items.length === 0) {
        shoppingList.innerHTML = "<li>No items found.</li>";
    } else {
            const li = document.createElement("li");
            li.textContent = items;
            shoppingList.appendChild(li);
    }
}

function fetchGEData() {
    // Simulate fetching data from the Grand Exchange API
    fetch("https://api.weirdgloop.org/exchange/history/osrs/latest?name=Rune Scimitar")
        .then(response => response.json())
        .then(data => {
            //{"Rune scimitar":{"id":"1333","timestamp":"2026-02-16T05:58:20.000Z","price":15120,"volume":54661}}
            console.log(data["Rune scimitar"].id); // Log the fetched data for debugging
            // Extract relevant information from each element
            const itemID = data["Rune scimitar"].id;
            const itemPrice = data["Rune scimitar"].price;
            const itemVolume = data["Rune scimitar"].volume;
            itemValues = `ID: ${itemID}, Price: ${itemPrice}, Volume: ${itemVolume}`;

            // Update the shopping list with the fetched item
            updateShoppingList(itemValues);
        })
        .catch(error => {
            console.error("Error fetching GE data:", error);
        });

}

window.onload = function() {
    fetchGEData();
}