text = input("Enter a string: ")

result = ""

for i in range(len(text) - 1, -1, -1):
    result += text[i]

print("Reversed string:", result)