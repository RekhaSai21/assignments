students = {
    "Asha": {"Python": 82, "SQL": 76, "React": 91},
    "Rohan": {"Python": 88, "SQL": 92, "React": 79},
    "Meera": {"Python": 95, "SQL": 84, "React": 90}
}

student_averages = {}

subject_totals = {}

for name, subjects in students.items():

    total = 0

    for subject, score in subjects.items():

        total += score

        if subject not in subject_totals:
            subject_totals[subject] = 0

        subject_totals[subject] += score

    average = total / len(subjects)
    student_averages[name] = average

print("Student averages:")

for name, average in student_averages.items():
    print(name, ":", round(average, 2))

top_student = None
highest_average = 0

for name, average in student_averages.items():

    if average > highest_average:
        highest_average = average
        top_student = name

subject_averages = {}

for subject, total in subject_totals.items():
    subject_averages[subject] = total / len(students)

top_subject = None
highest_subject_average = 0

for subject, average in subject_averages.items():

    if average > highest_subject_average:
        highest_subject_average = average
        top_subject = subject

print("Top student:", top_student)
print("Highest student average:", round(highest_average, 2))

print("Subject averages:", subject_averages)
print("Highest class average subject:", top_subject)