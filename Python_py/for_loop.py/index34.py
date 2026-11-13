n = int(input())
numbers = list(map(int, input().split()))
total = 0

for i in numbers:
    total += i

average = total / n
print(average)