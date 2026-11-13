text1 = input("Enter first string: ")
text2 = input("Enter second string: ")

str1 = text1.replace(" ", "").lower()
str2 = text2.replace(" ", "").lower()

freq1 = {}
freq2 = {}

for char in str1:
    if char not in freq1:
        freq1[char] = 1
    else:
        freq1[char] += 1

for char in str2:
    if char not in freq2:
        freq2[char] = 1
    else:
        freq2[char] += 1

if freq1 == freq2:
    print("The strings are anagrams")
else:
    print("The strings are not anagrams")