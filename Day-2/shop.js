const readline = require('readline-sync');

//npm i readline-sync   
// Array of objects representing an inventory
// Each object has properties: name, category, and price

let inventory = [
    {
        name: "Apple",
        category: "Fruits",
        price: 120,
    },
    {
        name: "Shirt",
        category: "Clothing",
        price: 500,
    },
    {
        name: "Book",
        category: "Statinoary",
        price: 150,
    },
    {
        name: "Laptop",
        category: "electronics",
        price: 100000,
    },
]


while (true) {
    console.log("Welcome to Hamro Dokan");
    console.log("1. View all dokan ko saman");
    console.log("2. Add saman to dokan");
    console.log("3. remove bigraeko saman");
    console.log("4. filter saman by category");
    console.log("5. Exit");
    const choice = readline.question("Enter your choice: ");
    switch (choice) {
        case "1": {
            viewInventory();
            break;
        }
        case "2": {
            addInventory();
            break;
        }
        case "3": {
            removeInventory();
            break;
        }
        case "4": {
            filterInventory();
            break;
        }
        case "5": {
            console.log("Thank you for visiting Hamro Dokan!");
            process.exit(0);
        }
        default: {
            console.log("Invalid choice. Please try again.");
        }
}
}

const viewInventory = () => {
    inventory.forEach((item) => {
        console.log(`Name: ${item.name}, Category: ${item.category}, Price: ${item.price}`);
    });
};