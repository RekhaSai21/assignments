nums = [1, 5, 3, 2, 6, 4, 3, 8, 9]

n = len(nums)
expected_sum = n * (n + 1) // 2

actual_sum = 0
repeated = None

for num in nums:
    actual_sum += num

    count = 0

    for value in nums:
        if value == num:
            count += 1

    if count == 2:
        repeated = num

missing = expected_sum - (actual_sum - repeated)

print("Missing number:", missing)
print("Repeated number:", repeated)