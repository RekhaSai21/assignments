d1 = {
    'Math': ['Asha', 'Ravi'],
    'Science': ['Neha']
}

d2 = {
    'Math': ['Ravi', 'Kiran'],
    'English': ['Asha']
}

result = {}

for subject in d1:
    result[subject] = []

    for name in d1[subject]:
        if name not in result[subject]:
            result[subject].append(name)

for subject in d2:

    if subject not in result:
        result[subject] = []

    for name in d2[subject]:
        if name not in result[subject]:
            result[subject].append(name)

print(result)