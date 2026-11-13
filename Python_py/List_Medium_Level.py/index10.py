numbers = [7, 1, 5, 3, 6, 4]

smallest = numbers[0]
max_difference = None

for i in range(1, len(numbers)):
    difference = numbers[i] - smallest

    if max_difference is None or difference > max_difference:
        max_difference = difference

    if numbers[i] < smallest:
        smallest = numbers[i]

print("Largest difference:", max_difference)