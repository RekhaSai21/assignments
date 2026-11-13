sentence = "Python makes problem solving easier with practice"

longest_word = ""
current_word = ""

for char in sentence:

    if char != " ":
        current_word += char

    else:
        if len(current_word) > len(longest_word):
            longest_word = current_word

        current_word = ""

if len(current_word) > len(longest_word):
    longest_word = current_word

print("Longest word:", longest_word)
print("Length:", len(longest_word))