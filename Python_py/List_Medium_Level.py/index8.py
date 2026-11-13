numbers = [1, 2, 3, 4, 5]

k = 2

n = len(numbers)

if n > 0:
    k = k % n

result = []

for i in range(n - k, n):
    result.append(numbers[i])

for i in range(0, n - k):
    result.append(numbers[i])

print(result)