scores = [10, 12, 15, 14, 16, 18, 20, 17, 19, 21, 22]

current = [scores[0]]
longest = [scores[0]]

for i in range(1, len(scores)):

    if scores[i] > scores[i - 1]:
        current.append(scores[i])

    else:
        if len(current) > len(longest):
            longest = current

        current = [scores[i]]

if len(current) > len(longest):
    longest = current

print("Longest streak:", longest)
print("Length:", len(longest))