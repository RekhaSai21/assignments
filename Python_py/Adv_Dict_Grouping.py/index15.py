words = [
    'pear', 'Apple', 'fig',
    'kiwi', 'Banana', 'plum', 'ant'
]

result = {}

for word in words:
    key = len(word)

    if key not in result:
        result[key] = []

    result[key].append(word)

for key in result:
    result[key].sort(key=str.lower)

print(result)