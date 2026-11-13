employees = [
    {'name': 'Asha', 'dept': 'IT', 'salary': 50000},
    {'name': 'Ravi', 'dept': 'HR', 'salary': 40000},
    {'name': 'Neha', 'dept': 'IT', 'salary': 70000},
    {'name': 'Imran', 'dept': 'HR', 'salary': 50000}
]

result = {}

for emp in employees:
    dept = emp['dept']

    if dept not in result:
        result[dept] = {
            'employees': [],
            'total_salary': 0,
            'count': 0
        }

    result[dept]['employees'].append(emp['name'])
    result[dept]['total_salary'] += emp['salary']
    result[dept]['count'] += 1

for dept in result:
    total = result[dept]['total_salary']
    count = result[dept]['count']

    average = total / count

    result[dept]['average_salary'] = round(average, 2)

    del result[dept]['total_salary']
    del result[dept]['count']

print(result)