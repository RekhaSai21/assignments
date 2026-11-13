def my_count(iterable, target):
    count = 0

    for item in iterable:
        if item == target:
            count += 1

    return count


print(my_count([1, 2, 2, 3, 2, 4], 2))