def my_filter(func, iterable):
    result = []

    for item in iterable:
        if func(item):
            result.append(item)

    return result


print(my_filter(lambda x: x % 2 == 0, [1, 2, 3, 4, 5, 6]))