
let choice = prompt("Do you want to buy any item? yes/no");

if (choice && choice.toLowerCase() === "yes") {

    let selectedItem = prompt("Enter item number or item name:");

    let itemNo = 1;
    let selected = null;

    // Find Veg Items
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

    // Find Non-Veg Items
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

        // Ask Quantity
        let quantity = Number(prompt("Enter quantity:"));

        let availableStock;

        // Get Available Stock
        if (selected.category === "Veg") {

            availableStock = parseFloat(selected.details.stock);

        } else if (selected.name === "Eggs") {

            availableStock = selected.details.stock;

        } else {

            availableStock = parseFloat(
                selected.details.stock.meat.netWeight
            );

        }

        // Validate Quantity
        if (isNaN(quantity) || quantity <= 0) {

            alert("Please enter a valid quantity!");

        }

        // Check Low Stock
        else if (quantity > availableStock) {

            alert(
                selected.name +
                " cannot be dispatched due to low stock!\n" +
                "Available Stock: " + availableStock
            );

            console.log("Order Failed!");
            console.log("Requested Quantity:", quantity);
            console.log("Available Stock:", availableStock);

        }

        // Successful Purchase
        else {

            // Deduct Stock
            if (selected.category === "Veg") {

                selected.details.stock =
                    (availableStock - quantity) + " kg";

            } else if (selected.name === "Eggs") {

                selected.details.stock -= quantity;

            } else {

                selected.details.stock.meat.netWeight =
                    (availableStock - quantity) + " kg";

            }

            // Calculate Total Amount
            let totalAmount =
                Number(selected.details.price) * quantity;

            // Display Bill
            console.log("========== BILL ==========");
            console.log("Item Name:", selected.name);
            console.log("Category:", selected.category);
            console.log("Quantity:", quantity);
            console.log("Price:", "₹" + selected.details.price);
            console.log("Total Amount:", "₹" + totalAmount);

            console.log(
                "Remaining Stock:",
                selected.category === "Veg" || selected.name === "Eggs"
                    ? selected.details.stock
                    : selected.details.stock.meat.netWeight
            );

            console.log("Order Successful!");
            console.log("==========================");

        }

    } else {

        alert("Invalid item number or item name!");

    }

} else {

    console.log("Thank you for visiting our market!");

}
