text = input("Enter a string: ")

result = {}

for char in text.lower():
    if char != " ":

        if char not in result:
            result[char] = 1
        else:
            result[char] += 1

print(result)