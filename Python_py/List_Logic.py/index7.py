numbers = [11, 20, 35, 42, 57, 60]

count = 0

for i in numbers:
    if i % 2 != 0:
        count += 1

print("Odd numbers =", count)