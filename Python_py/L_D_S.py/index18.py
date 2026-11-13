password = "Python@123"

has_upper = False
has_lower = False
has_digit = False
has_special = False

for char in password:

    if char.isupper():
        has_upper = True

    elif char.islower():
        has_lower = True

    elif char.isdigit():
        has_digit = True

    else:
        has_special = True

valid = True

if len(password) < 8:
    print("Failed: Password must contain at least 8 characters")
    valid = False

if not has_upper:
    print("Failed: At least one uppercase letter is required")
    valid = False

if not has_lower:
    print("Failed: At least one lowercase letter is required")
    valid = False

if not has_digit:
    print("Failed: At least one digit is required")
    valid = False

if not has_special:
    print("Failed: At least one special character is required")
    valid = False

if valid:
    print("Valid Password")