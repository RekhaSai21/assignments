products = {
    "Mouse": 25,
    "Keyboard": 15,
    "Monitor": 10,
    "Laptop": 8,
    "Printer": 12
}

name = input("Enter product name: ")

if name in products:
    print(name, "is available.")
    print("Quantity:", products[name])

else:
    print(name, "is not available.")