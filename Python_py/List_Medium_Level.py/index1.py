numbers = [10, 5, 20, 8, 20, 15]

largest = None
second = None

for num in numbers:
    if largest is None or num > largest:
        second = largest
        largest = num
    elif num != largest and (second is None or num > second):
        second = num

print("Second largest:", second)