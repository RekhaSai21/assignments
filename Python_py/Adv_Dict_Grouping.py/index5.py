transactions = [
    {'user': 'Asha', 'type': 'credit', 'amount': 1000},
    {'user': 'Asha', 'type': 'debit', 'amount': 250},
    {'user': 'Ravi', 'type': 'debit', 'amount': 100},
    {'user': 'Asha', 'type': 'credit', 'amount': 500}
]

result = {}

for item in transactions:
    user = item['user']
    trans_type = item['type']
    amount = item['amount']

    if user not in result:
        result[user] = {
            'credit': 0,
            'debit': 0,
            'net': 0
        }

    if trans_type == 'credit':
        result[user]['credit'] += amount
    elif trans_type == 'debit':
        result[user]['debit'] += amount

for user in result:
    credit = result[user]['credit']
    debit = result[user]['debit']

    result[user]['net'] = credit - debit

print(result)