numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

current_sum = numbers[0]
max_sum = numbers[0]

start = 0
end = 0
temp_start = 0

for i in range(1, len(numbers)):

    if current_sum + numbers[i] < numbers[i]:
        current_sum = numbers[i]
        temp_start = i

    else:
        current_sum += numbers[i]

    if current_sum > max_sum:
        max_sum = current_sum
        start = temp_start
        end = i

result = []

for i in range(start, end + 1):
    result.append(numbers[i])

print("Maximum Sum:", max_sum)
print("Sublist:", result)