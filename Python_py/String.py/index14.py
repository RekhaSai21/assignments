text = input("Enter a string: ")

valid = True

if text == "":
    valid = False

for char in text:
    if char not in "0123456789":
        valid = False
        break

if valid:
    print("Contains only digits")
else:
    print("Contains non-digit characters")