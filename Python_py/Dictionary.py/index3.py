products = {
    "Mouse": 500,
    "Monitor": 8000,
    "Laptop": 55000
}

name = input("Enter product name: ")
price = int(input("Enter price: "))

products[name] = price

print(products)