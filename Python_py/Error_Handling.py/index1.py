
accounts = {
    "1234": {"name": "Ravi", "balance": 5000},
    "5678": {"name": "Meena", "balance": 12000},
    "9999": {"name": "Arjun", "balance": 800}
}

try:
    # Get PIN and withdrawal amount
    pin = input("Enter your PIN: ")
    amount = int(input("Enter withdrawal amount: "))

    # Find the account
    account = accounts[pin]

    # Check whether amount is zero
    # This division deliberately raises ZeroDivisionError for zero.
    check = amount / amount

    # Calculate the number of ₹100 notes
    notes_needed = amount // 100

    # Check whether amount is a multiple of 100
    if amount % 100 != 0:
        raise ValueError("Amount must be a multiple of 100!")

    # Check account balance
    if amount > account["balance"]:
        raise RuntimeError("Insufficient funds!")

    # Deduct the withdrawal amount
    account["balance"] -= amount

except ValueError:
    # Handles letters or amounts that are not multiples of 100
    print("Please enter a valid amount!")

except KeyError:
    # Handles a PIN that does not exist
    print("Invalid PIN. Account not found.")

except ZeroDivisionError:
    # Handles a withdrawal amount of zero
    print("Amount cannot be zero!")

except RuntimeError as error:
    # Handles insufficient account balance
    print(error)

except Exception as error:
    # Handles any other unexpected error
    print(f"Transaction failed: {error}")

else:
    # Runs only when the transaction is successful
    print("\nTransaction Successful!")
    print("Account Holder:", account["name"])
    print("Amount Withdrawn: ₹", amount)
    print("Remaining Balance: ₹", account["balance"])

finally:
    # Always executes, whether successful or unsuccessful
    print("\nTransaction session ended.")
