numbers = [1, 2, 3, 2, 4, 5, 6, 1]

current = []
longest = []

for i in range(len(numbers)):

    if i == 0 or numbers[i] > numbers[i - 1]:
        current.append(numbers[i])

    else:
        if len(current) > len(longest):
            longest = current

        current = [numbers[i]]

if len(current) > len(longest):
    longest = current

print(longest)