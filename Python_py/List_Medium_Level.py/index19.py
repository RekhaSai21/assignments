numbers = [1, 2, 3, 2, 1]

is_palindrome = True

for i in range(len(numbers) // 2):

    if numbers[i] != numbers[len(numbers) - 1 - i]:
        is_palindrome = False
        break

if is_palindrome:
    print("Palindrome")

else:
    print("Not a Palindrome")