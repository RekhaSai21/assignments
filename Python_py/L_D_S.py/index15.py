str1 = "The eyes"
str2 = "They see"

clean1 = ""
clean2 = ""

for char in str1.lower():

    if char.isalnum():
        clean1 += char

for char in str2.lower():

    if char.isalnum():
        clean2 += char

if len(clean1) != len(clean2):
    print("Not Anagrams")

else:
    anagram = True

    for char in clean1:

        count1 = 0
        count2 = 0

        for value in clean1:
            if value == char:
                count1 += 1

        for value in clean2:
            if value == char:
                count2 += 1

        if count1 != count2:
            anagram = False
            break

    if anagram:
        print("Anagrams")
    else:
        print("Not Anagrams")