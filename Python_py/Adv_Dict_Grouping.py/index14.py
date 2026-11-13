visits = [
    {'user': 'Asha', 'page': 'home'},
    {'user': 'Asha', 'page': 'jobs'},
    {'user': 'Asha', 'page': 'home'},
    {'user': 'Ravi', 'page': 'home'},
    {'user': 'Ravi', 'page': 'jobs'}
]

result = {}

for item in visits:
    user = item['user']
    page = item['page']

    if user not in result:
        result[user] = {}

    if page not in result[user]:
        result[user][page] = 0

    result[user][page] += 1

print(result)