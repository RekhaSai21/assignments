words = ["cat", "dog", "apple", "bat", "mango", "hi", "sun"]

result = {}

for word in words:
    key = len(word)

    if key not in result:
        result[key] = []

    result[key].append(word)

print(result)