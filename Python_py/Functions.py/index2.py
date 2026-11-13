def my_range(start, stop, step=1):
    result = []

    if step == 0:
        return "Step cannot be zero"

    current = start

    if step > 0:
        while current < stop:
            result.append(current)
            current += step
    else:
        while current > stop:
            result.append(current)
            current += step

    return result


print(my_range(2, 10, 2))
print(my_range(10, 2, -2))