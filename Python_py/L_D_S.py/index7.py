employees = {
    "Amit": ("IT", 82),
    "Riya": ("HR", 91),
    "Neha": ("IT", 95),
    "Rahul": ("Sales", 88),
    "Karan": ("IT", 95),
    "Pooja": ("HR", 86),
    "Vivek": ("Sales", 93)
}

departments = {}

for name, details in employees.items():

    department = details[0]
    score = details[1]

    if department not in departments:
        departments[department] = {
            "highest": score,
            "employees": [name]
        }

    elif score > departments[department]["highest"]:
        departments[department]["highest"] = score
        departments[department]["employees"] = [name]

    elif score == departments[department]["highest"]:
        departments[department]["employees"].append(name)

for department, details in departments.items():
    print(department, ":", details["employees"],
          "- Score:", details["highest"])