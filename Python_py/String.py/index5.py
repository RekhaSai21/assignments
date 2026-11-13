text = input("Enter a string: ")

cleaned = ""

for char in text.lower():
    if char != " ":
        cleaned += char

frequency = {}

for char in cleaned:
    if char not in frequency:
        frequency[char] = 1
    else:
        frequency[char] += 1

found = False

for char in cleaned:
    if frequency[char] == 1:
        print(char)
        found = True
        break

if found == False:
    print("No unique character")