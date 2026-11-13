text = input("Enter a sentence: ")

text = text.lower()
text = text.replace(",", "")
text = text.replace(".", "")

words = text.split()

frequency = {}

for word in words:
    if word not in frequency:
        frequency[word] = 1
    else:
        frequency[word] += 1

print(frequency)