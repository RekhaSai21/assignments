numbers = [2, 3, 2, 4, 3, 2, 5]

frequency = {}

for num in numbers:
    if num in frequency:
        frequency[num] += 1
    else:
        frequency[num] = 1

for key in frequency:
    print(key, "->", frequency[key])