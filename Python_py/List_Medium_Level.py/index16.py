numbers = [4, 5, 1, 2, 1, 4, 5]

for i in range(len(numbers)):

    count = 0

    for j in range(len(numbers)):

        if numbers[i] == numbers[j]:
            count += 1

    if count == 1:
        print("First non-repeating:", numbers[i])
        break

else:
    print("No non-repeating element found")