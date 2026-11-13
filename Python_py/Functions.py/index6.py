def my_min(numbers):
    if not numbers:
        return None

    smallest = numbers[0]

    for num in numbers:
        if num < smallest:
            smallest = num

    return smallest


print(my_min([3, 7, 2, 9, 4]))