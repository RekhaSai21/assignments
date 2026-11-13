n = int(input())
largest = 0

for i in map(int, input().split()):
    if i > largest:
        largest = i

print(largest)