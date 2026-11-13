def my_upper(text):
    result = ""

    for char in text:
        if 'a' <= char <= 'z':
            new_char = chr(ord(char) - 32)
            result += new_char
        else:
            result += char

    return result


print(my_upper("hello world"))
print(my_upper("Python 123"))