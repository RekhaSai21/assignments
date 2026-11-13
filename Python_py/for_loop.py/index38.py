n = int(input())
temp = n
digits = len(str(n))
total = 0

for i in str(n):
    total += int(i) ** digits

if total == temp:
    print("Armstrong Number")
else:
    print("Not Armstrong Number")