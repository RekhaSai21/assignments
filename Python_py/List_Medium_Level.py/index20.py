numbers = [10, 5, 20, 20, 8, 15, 10]

first = None
second = None
third = None

for num in numbers:

    if num == first or num == second or num == third:
        continue

    if first is None or num > first:
        third = second
        second = first
        first = num

    elif second is None or num > second:
        third = second
        second = num

    elif third is None or num > third:
        third = num

result = []

if first is not None:
    result.append(first)

if second is not None:
    result.append(second)

if third is not None:
    result.append(third)

print(result)