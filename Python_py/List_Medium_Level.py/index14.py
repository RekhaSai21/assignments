numbers = [10, 20, 30, 40, 50]

total = 0

for num in numbers:
    total += num

average = total / len(numbers)

result = []

for num in numbers:
    if num > average:
        result.append(num)

print("Average:", average)
print("Result:", result)