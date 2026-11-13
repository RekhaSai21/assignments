numbers = [25, 10, 45, 32, 18]

largest = numbers[0]

for i in numbers:
    if i > largest:
        largest = i

print("Largest =", largest)