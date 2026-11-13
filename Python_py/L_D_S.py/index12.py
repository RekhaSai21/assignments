transactions = [
    ("food", 250),
    ("travel", 800),
    ("food", 150),
    ("shopping", 1200),
    ("travel", 300),
    ("food", 100)
]

spending = {}

for category, amount in transactions:

    if category in spending:
        spending[category] += amount
    else:
        spending[category] = amount

total_expenditure = 0

for amount in spending.values():
    total_expenditure += amount

average = total_expenditure / len(spending)

highest_category = None
highest_spending = 0

for category, amount in spending.items():

    if amount > highest_spending:
        highest_spending = amount
        highest_category = category

print("Category spending:", spending)
print("Highest spending category:", highest_category)
print("Highest spending:", highest_spending)
print("Total expenditure:", total_expenditure)
print("Average category spending:", average)

print("Above average categories:")

for category, amount in spending.items():

    if amount > average:
        print(category, ":", amount)