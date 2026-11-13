students = [
    ("Rahul", "CSE", 1),
    ("Priya", "ECE", 2),
    ("Amit", "CSE", 2),
    ("Sneha", "CSE", 1),
    ("Ravi", "ECE", 2),
    ("Kiran", "CSE", 2)
]

result = {}

for name, department, year in students:

    if department not in result:
        result[department] = {}

    if year not in result[department]:
        result[department][year] = []

    result[department][year].append(name)

print(result)