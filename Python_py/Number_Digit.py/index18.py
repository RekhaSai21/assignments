n = int(input())
largest = -1
second = -1

while n > 0:
    digit = n % 10

    if digit > largest:
        second = largest
        largest = digit

    elif digit < largest and digit > second:
        second = digit

    n = n // 10

print(second)