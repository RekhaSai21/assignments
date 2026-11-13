n = int(input())
flag = True

while n > 0:
    digit = n % 10

    if digit % 2 == 0:
        flag = False
        break

    n = n // 10

if flag and n >= 0:
    print("All digits are odd")
else:
    print("Not all digits are odd")