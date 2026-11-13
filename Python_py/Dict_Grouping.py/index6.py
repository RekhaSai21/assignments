employees = [
    ("Sanket", "IT"),
    ("Rahul", "HR"),
    ("Priya", "IT"),
    ("Amit", "Sales"),
    ("Sneha", "HR"),
    ("Ravi", "IT")
]

result = {}

for name, department in employees:
    if department not in result:
        result[department] = []

    result[department].append(name)

print(result)