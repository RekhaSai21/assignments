numbers = [10, 45, 23, 67, 34, 89, 56]

largest = numbers[0]
second = numbers[0]

for i in numbers:
    if i > largest:
        second = largest
        largest = i

    elif i > second and i != largest:
        second = i

print("Second Largest =", second)