products = [
    ("iPhone", "Mobile"),
    ("Samsung", "Mobile"),
    ("Dell", "Laptop"),
    ("HP", "Laptop"),
    ("Nike", "Shoes"),
    ("Adidas", "Shoes")
]

result = {}

for name, category in products:
    if category not in result:
        result[category] = []

    result[category].append(name)

print(result)