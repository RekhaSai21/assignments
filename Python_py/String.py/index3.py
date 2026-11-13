text = input("Enter a string: ")

cleaned = ""

for char in text:
    if char != " ":
        cleaned += char.lower()

reversed_text = ""

for i in range(len(cleaned) - 1, -1, -1):
    reversed_text += cleaned[i]

if cleaned == reversed_text:
    print("It is a palindrome")
else:
    print("It is not a palindrome")