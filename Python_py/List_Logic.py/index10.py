numbers = [25, 10, 45, 32, 18]

smallest = numbers[0]

for i in numbers:
    if i < smallest:
        smallest = i

print("Smallest =", smallest)