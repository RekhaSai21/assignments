text = input("Enter a sentence: ")

words = text.split()

longest = ""

for word in words:
    word = word.strip(".,!?;:")

    if len(word) > len(longest):
        longest = word

print("Longest word:", longest)