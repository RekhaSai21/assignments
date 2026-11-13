employees = {
    "Amit": 40000,
    "Rahul": 35000,
    "Priya": 50000
}

name = input("Enter employee name: ")

if name in employees:
    salary = int(input("Enter new salary: "))
    employees[name] = salary

    print(employees)

else:
    print("Employee not found")