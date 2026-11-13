numbers = [1, 2, 3, 5, 6, 7]

n = 7

total = 0

for i in range(1, n + 1):
    total = total + i

list_sum = 0

for num in numbers:
    list_sum = list_sum + num

missing = total - list_sum

print("Missing number:", missing)