def my_contains(iterable, target):
    for item in iterable:
        if item == target:
            return True

    return False


print(my_contains([1, 2, 3], 2))
print(my_contains([1, 2, 3], 9))