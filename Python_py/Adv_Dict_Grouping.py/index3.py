words = [
    'Listen', 'silent', 'enlist',
    'rat', 'tar', 'art',
    'evil', 'vile', 'cat'
]

grouped = {}

for word in words:
    key = ''.join(sorted(word.lower()))

    if key not in grouped:
        grouped[key] = []

    grouped[key].append(word)

result = []

for key in grouped:
    result.append(grouped[key])

print(result)