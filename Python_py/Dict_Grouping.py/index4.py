students = [
    ("Rahul", "A"),
    ("Priya", "B"),
    ("Amit", "A"),
    ("Sneha", "C"),
    ("Ravi", "B")
]

result = {}

for name, grade in students:
    if grade not in result:
        result[grade] = []

    result[grade].append(name)

print(result)