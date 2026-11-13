numbers = [123, 321, 213, 456, 654, 112, 121, 45]

grouped = {}

for num in numbers:
    key = ''.join(sorted(str(num)))

    if key not in grouped:
        grouped[key] = []

    grouped[key].append(num)

result = []

for key in grouped:
    result.append(grouped[key])

print(result)