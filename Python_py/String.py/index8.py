text = input("Enter a string: ")

cleaned = text.replace(" ", "").lower()

frequency = {}

for char in cleaned:
    if char not in frequency:
        frequency[char] = 1
    else:
        frequency[char] += 1

maximum = 0

for char in frequency:
    if frequency[char] > maximum:
        maximum = frequency[char]

for char in cleaned:
    if frequency[char] == maximum:
        print(char, "(", maximum, "times)")
        break