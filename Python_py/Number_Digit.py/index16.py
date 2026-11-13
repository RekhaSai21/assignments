n = int(input())
temp = n
flag = True

while n > 0:
    digit = n % 10

    if digit % 2 != 0:
        flag = False
        break

    n = n // 10

if flag and temp > 0:
    print("All digits are even")
else:
    print("Not all digits are even")