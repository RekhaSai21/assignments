def my_index(iterable, target):
    index = 0

    for item in iterable:
        if item == target:
            return index

        index += 1

    return -1


print(my_index([5, 8, 2, 8, 1], 8))
print(my_index([5, 8, 2], 99))