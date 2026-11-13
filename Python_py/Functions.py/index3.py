def my_enumerate(iterable, start=0):
    result = []
    index = start

    for item in iterable:
        result.append((index, item))
        index += 1

    return result


print(my_enumerate(['a', 'b', 'c']))
print(my_enumerate(['a', 'b', 'c'], 1))