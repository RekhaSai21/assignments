def my_max(numbers):
    if not numbers:
        return None

    largest = numbers[0]

    for num in numbers:
        if num > largest:
            largest = num

    return largest


print(my_max([3, 7, 2, 9, 4]))