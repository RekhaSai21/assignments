data = [4, 0, 7, 0, 2, 9, 0, 5, 0, 3]

position = 0

for i in range(len(data)):

    if data[i] != 0:
        data[position] = data[i]
        position += 1

while position < len(data):
    data[position] = 0
    position += 1

print(data)