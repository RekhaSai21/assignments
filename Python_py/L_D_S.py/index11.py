words = ["cat", "apple", "dog", "banana", "sun", "table", "hi", "python"]

grouped = {}

for word in words:

    length = len(word)

    if length not in grouped:
        grouped[length] = []

    grouped[length].append(word)

print(grouped)