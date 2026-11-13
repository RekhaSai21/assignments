shop1 = {"pen": 20, "book": 15, "bag": 8}
shop2 = {"book": 10, "bag": 5, "bottle": 12}

inventory = {}

for product, quantity in shop1.items():
    inventory[product] = quantity

for product, quantity in shop2.items():

    if product in inventory:
        inventory[product] += quantity
    else:
        inventory[product] = quantity

highest_product = None
highest_stock = 0

for product, quantity in inventory.items():

    if quantity > highest_stock:
        highest_stock = quantity
        highest_product = product

print("Final inventory:", inventory)
print("Highest stock product:", highest_product)
print("Quantity:", highest_stock)