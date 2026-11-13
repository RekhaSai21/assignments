numbers = [12, 25, 32, 45, 17, 22, 35, 48]

result = {}

for num in numbers:
    key = num % 10

    if key not in result:
        result[key] = []

    result[key].append(num)

print(result)