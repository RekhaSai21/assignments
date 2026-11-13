marks = [78, 92, 65, 88, 92, 71, 56, 88, 95, 65]

highest = marks[0]
second_highest = None
total = 0
highest_count = 0

for mark in marks:
    total += mark

    if mark > highest:
        second_highest = highest
        highest = mark

    elif mark != highest:
        if second_highest is None or mark > second_highest:
            second_highest = mark

for mark in marks:
    if mark == highest:
        highest_count += 1

average = total / len(marks)

print("Highest mark:", highest)
print("Second highest:", second_highest)
print("Highest mark count:", highest_count)
print("Average:", average)