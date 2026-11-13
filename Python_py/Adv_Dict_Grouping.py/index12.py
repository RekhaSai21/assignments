students = {
    'Asha': 92,
    'Ravi': 77,
    'Neha': 84,
    'Imran': 54,
    'Kiran': 68,
    'Maya': 95
}

result = {
    '90-100': {'names': [], 'count': 0},
    '75-89': {'names': [], 'count': 0},
    '60-74': {'names': [], 'count': 0},
    'below 60': {'names': [], 'count': 0}
}

for name in students:
    marks = students[name]

    if marks >= 90:
        key = '90-100'

    elif marks >= 75:
        key = '75-89'

    elif marks >= 60:
        key = '60-74'

    else:
        key = 'below 60'

    result[key]['names'].append(name)
    result[key]['count'] += 1

print(result)