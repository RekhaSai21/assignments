numbers = [10, 15, 22, 31, 40, 51, 60]

count = 0

for i in numbers:
    if i % 2 == 0:
        count += 1

print("Even numbers =", count)