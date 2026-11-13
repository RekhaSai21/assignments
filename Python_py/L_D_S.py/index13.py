text = "swiss"

found = False

for i in range(len(text)):

    count = 0

    for j in range(len(text)):

        if text[i].lower() == text[j].lower():
            count += 1

    if count == 1:
        print("First non-repeating character:", text[i])
        found = True
        break

if not found:
    print("No non-repeating character found")