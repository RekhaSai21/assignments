products = [101, 103, 101, 105, 107, 103, 109, 105, 110, 107]

i = 0

while i < len(products):
    j = i + 1

    while j < len(products):
        if products[i] == products[j]:
            products.pop(j)
        else:
            j += 1

    i += 1

print(products)