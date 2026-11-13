products = [
    {'name': 'Pen', 'category': 'Stationery', 'price': 10},
    {'name': 'Book', 'category': 'Stationery', 'price': 100},
    {'name': 'Pencil', 'category': 'Stationery', 'price': 10},
    {'name': 'Mug', 'category': 'Kitchen', 'price': 150},
    {'name': 'Plate', 'category': 'Kitchen', 'price': 150}
]

result = {}

for item in products:
    name = item['name']
    category = item['category']
    price = item['price']

    if category not in result:
        result[category] = {
            'products': [],
            'top': [],
            'max_price': price
        }

    result[category]['products'].append(name)

    if price > result[category]['max_price']:
        result[category]['max_price'] = price
        result[category]['top'] = [(name, price)]

    elif price == result[category]['max_price']:
        result[category]['top'].append((name, price))

for category in result:
    del result[category]['max_price']

print(result)