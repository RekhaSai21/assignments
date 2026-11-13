def my_len(list1, list2):
    result = []

    length1 = my_len(list1)
    length2 = my_len(list2)

    if length1 < length2:
        limit = length1
    else:
        limit = length2

    index = 0

    while index < limit:
        result.append((list1[index], list2[index]))
        index += 1

    return result


print(my_len([1, 2, 3], ['a', 'b', 'c']))
print(my_len([1, 2, 3], ['a', 'b']))