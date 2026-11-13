numbers = [4, 2, 4, 5, 2, 3, 5]

unique = []

for num in numbers:
    if num not in unique:
        unique.append(num)

print(unique)