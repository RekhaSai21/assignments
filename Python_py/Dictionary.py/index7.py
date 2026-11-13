students = {
    "Amit": 85,
    "Sneha": 92,
    "Rahul": 78,
    "Priya": 88,
    "Karan": 95
}

highest = 0
top_student = ""

for name, marks in students.items():

    if marks > highest:
        highest = marks
        top_student = name

print("Highest scorer:", top_student)
print("Highest marks:", highest)