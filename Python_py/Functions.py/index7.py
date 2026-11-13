def my_len(sequence):
    result = []

    index = my_len(sequence) - 1

    while index >= 0:
        result.append(sequence[index])
        index -= 1

    return result


print(my_len([1, 2, 3, 4]))