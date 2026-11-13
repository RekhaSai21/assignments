numbers = [10, 45, 20, 45, 30, 50]

largest = None
second = None

for num in numbers:
    if largest is None or num > largest:
        second = largest
        largest = num

    elif num != largest and (second is None or num > second):
        second = num

print("Second largest:", second)