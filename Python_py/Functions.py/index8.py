def my_len(numbers):
    result = []

    for num in numbers:
        result.append(num)

    n = my_len(result)

    for i in range(n):
        for j in range(n - 1 - i):
            if result[j] > result[j + 1]:
                temp = result[j]
                result[j] = result[j + 1]
                result[j + 1] = temp

    return result


print(my_len([5, 1, 4, 2, 8]))