numbers = [1, 2, -3, -4, 5, -6]

positive = []
negative = []

for num in numbers:
    if num > 0:
        positive.append(num)

    elif num < 0:
        negative.append(num)

result = []

i = 0
j = 0

while i < len(positive) and j < len(negative):

    result.append(positive[i])
    result.append(negative[j])

    i += 1
    j += 1

while i < len(positive):
    result.append(positive[i])
    i += 1

while j < len(negative):
    result.append(negative[j])
    j += 1

print(result)