numbers = [1, 2, 3, 4, 5, 6, 7]

k = 3

result = []

for i in range(0, len(numbers), k):
    temp = []

    for j in range(i, i + k):
        if j < len(numbers):
            temp.append(numbers[j])

    result.append(temp)

print(result)