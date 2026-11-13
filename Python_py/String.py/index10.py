text = input("Enter a sentence: ")

words = text.split()

result = []

for word in words:
    new_word = word[0].upper() + word[1:].lower()
    result.append(new_word)

output = " ".join(result)

print(output)