items = ['a', 'b', 'a', 'c', 'b', 'a', 'd']

grouped = {}

for index, value in enumerate(items):

    if value not in grouped:
        grouped[value] = []

    grouped[value].append(index)

result = {}

for value in grouped:
    if len(grouped[value]) > 1:
        result[value] = grouped[value]

print(result)