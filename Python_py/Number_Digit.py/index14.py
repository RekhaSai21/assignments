n = int(input())

last = n % 10
first = n

while first >= 10:
    first = first // 10

print("First digit =", first)
print("Last digit =", last)