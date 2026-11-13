sentence = "Python is easy, Python is powerful and EASY to learn."

frequency = {}
word = ""

for char in sentence.lower():

    if char.isalnum():
        word += char

    else:
        if word != "":
            if word in frequency:
                frequency[word] += 1
            else:
                frequency[word] = 1

            word = ""

if word != "":
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

print("Word frequency:", frequency)

repeated = []

for word, count in frequency.items():
    if count > 1:
        repeated.append((word, count))

repeated.sort(key=lambda item: item[1], reverse=True)

print("Repeated words:", repeated)