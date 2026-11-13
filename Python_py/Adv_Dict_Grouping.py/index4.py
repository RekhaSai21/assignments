students = {
    'Asha': {'Math': 90, 'Science': 82},
    'Ravi': {'Math': 76, 'Science': 95},
    'Neha': {'Math': 88, 'Science': 91}
}

result = {}

for name in students:
    subjects = students[name]

    for subject in subjects:
        marks = subjects[subject]

        if subject not in result:
            result[subject] = []

        result[subject].append((name, marks))

for subject in result:
    result[subject].sort(
        key=lambda x: x[1],
        reverse=True
    )

print(result)