words = ["apple", "ant", "banana", "ball", "cat", "car"]

result = {}

for word in words:
    key = word[0]

    if key not in result:
        result[key] = []

    result[key].append(word)

print(result)