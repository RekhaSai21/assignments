
let choice = prompt("Do you want to buy any item? yes/no");

if (choice.toLowerCase() === "yes") {

    let selectedItem = prompt("Enter item number or item name:");

    let itemNo = 1;
    let selected = null;

    // Search Veg Items
    market[0].veg.forEach((group) => {
        Object.entries(group).forEach(([name, details]) => {

            if (
                itemNo == selectedItem ||
                name.toLowerCase() === selectedItem.toLowerCase()
            ) {
                selected = {
                    name: name,
                    category: "Veg",
                    details: details
                };
            }

            itemNo++;
        });
    });

    // Search Non-Veg Items
    market[0].non_veg.forEach((group) => {
        Object.entries(group).forEach(([name, details]) => {

            if (
                itemNo == selectedItem ||
                name.toLowerCase() === selectedItem.toLowerCase()
            ) {
                selected = {
                    name: name,
                    category: "Non-Veg",
                    details: details
                };
            }

            itemNo++;
        });
    });

    if (selected !== null) {

        console.log("Selected Item:", selected.name);

        // Ask quantity
        let quantity = Number(prompt("Enter quantity:"));

        let availableStock;

        // Get available stock
        if (selected.category === "Veg") {

            availableStock = parseFloat(selected.details.stock);

        } else if (selected.name === "Eggs") {

            availableStock = selected.details.stock;

        } else {

            availableStock = parseFloat(
                selected.details.stock.meat.netWeight
            );

        }

        // Check quantity
        if (quantity > 0 && quantity <= availableStock) {

            // Deduct stock
            if (selected.category === "Veg") {

                selected.details.stock =
                    (availableStock - quantity) + " kg";

            } else if (selected.name === "Eggs") {

                selected.details.stock -= quantity;

            } else {

                selected.details.stock.meat.netWeight =
                    (availableStock - quantity) + " kg";

            }

            // Calculate total amount
            let totalAmount =
                Number(selected.details.price) * quantity;

            // Display bill
            console.log("========== BILL ==========");
            console.log("Item Name:", selected.name);
            console.log("Quantity:", quantity);
            console.log("Price:", selected.details.price);
            console.log("Total Amount: ₹", totalAmount);

            console.log(
                "Remaining Stock:",
                selected.category === "Veg" || selected.name === "Eggs"
                    ? selected.details.stock
                    : selected.details.stock.meat.netWeight
            );

            console.log("==========================");

        } else {

            console.log("Invalid quantity or insufficient stock!");

        }

    } else {

        console.log("Invalid item selection!");

    }

} else {

    console.log("Thank you for visiting!");

}
