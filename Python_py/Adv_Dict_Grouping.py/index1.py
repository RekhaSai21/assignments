sales = [
    {'month': 'Jan', 'product': 'Pen', 'qty': 10},
    {'month': 'Jan', 'product': 'Book', 'qty': 4},
    {'month': 'Jan', 'product': 'Pen', 'qty': 6},
    {'month': 'Feb', 'product': 'Pen', 'qty': 8}
]

result = {}

for item in sales:
    month = item['month']
    product = item['product']
    qty = item['qty']

    if month not in result:
        result[month] = {}

    if product not in result[month]:
        result[month][product] = 0

    result[month][product] += qty

print(result)