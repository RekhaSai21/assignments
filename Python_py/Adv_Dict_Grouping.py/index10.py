paragraph = 'Python is fun, and Python is useful.'

paragraph = paragraph.replace(',', '')
paragraph = paragraph.replace('.', '')
paragraph = paragraph.lower()

words = paragraph.split()

result = {}

for index, word in enumerate(words):

    if word not in result:
        result[word] = []

    result[word].append(index)

print(result)