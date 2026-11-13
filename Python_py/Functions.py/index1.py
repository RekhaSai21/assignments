def my_len(iterable):
    count = 0

    for item in iterable:
        count += 1

    return count


print(my_len([10, 20, 30, 40]))
print(my_len("hello"))