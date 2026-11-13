
let choice = prompt("Do you want to buy any item? (yes/no)");

if (choice.toLowerCase() === "yes") {

    let selectedItem = prompt(
        "Enter item number or item name:"
    );

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
        console.log("Category:", selected.category);
        console.log("Price:", selected.details.price);

        console.log("Selected Item Details:", selected.details);

    } else {

        alert("Invalid item number or item name!");

    }

} else {

    console.log("Thank you for visiting our market!");

}
