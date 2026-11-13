numbers = [5, 12, 67, 3, 45, 90, 22, 8, 55]

result = {
    "small": [],
    "medium": [],
    "large": []
}

for num in numbers:
    if num < 10:
        result["small"].append(num)
    elif num <= 50:
        result["medium"].append(num)
    else:
        result["large"].append(num)

print(result)