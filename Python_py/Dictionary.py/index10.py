fruits = {
    "Apple": 60,
    "Banana": 40,
    "Mango": 120,
    "Orange": 80,
    "Grapes": 100
}

name = input("Enter fruit name: ")

if name in fruits:
    del fruits[name]
    print(fruits)

else:
    print("Fruit not found")
    print(fruits)