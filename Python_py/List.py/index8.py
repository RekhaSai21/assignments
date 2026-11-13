numbers = [2, 5, 2, 8, 2, 9, 5]

target = 2

count = 0

for num in numbers:
    if num == target:
        count = count + 1

print("Occurrences:", count)