orders = [
    {'id': 101, 'customer': 'Asha', 'qty': 2, 'price': 300},
    {'id': 102, 'customer': 'Ravi', 'qty': 1, 'price': 500},
    {'id': 103, 'customer': 'Asha', 'qty': 3, 'price': 100}
]

result = {}

for order in orders:
    customer = order['customer']
    order_id = order['id']

    total_price = order['qty'] * order['price']

    if customer not in result:
        result[customer] = {
            'order_ids': [],
            'total': 0
        }

    result[customer]['order_ids'].append(order_id)
    result[customer]['total'] += total_price

print(result)