n = int(input())
temp = n
count = 0
total = 0

# Count digits
while n > 0:
    count += 1
    n = n // 10

n = temp

# Calculate Armstrong sum
while n > 0:
    digit = n % 10
    total += digit ** count
    n = n // 10

if total == temp:
    print("Armstrong Number")
else:
    print("Not Armstrong Number")