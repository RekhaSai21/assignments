
let itemNo = 1;

console.log("========== MARKET MENU ==========");

// VEG ITEMS
market[0].veg.forEach((group) => {
    Object.entries(group).forEach(([name, details]) => {

        console.log({
            itemNo: itemNo++,
            itemName: name,
            category: "Veg",
            price: "₹" + details.price + " per kg"
        });

    });
});

// NON-VEG ITEMS
market[0].non_veg.forEach((group) => {
    Object.entries(group).forEach(([name, details]) => {

        console.log({
            itemNo: itemNo++,
            itemName: name,
            category: "Non-Veg",
            price: "₹" + details.price +
                (name === "Eggs" ? " per unit" : " per kg")
        });

    });
});

console.log("=================================");
