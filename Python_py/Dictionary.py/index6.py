countries = {
    "India": "New Delhi",
    "Japan": "Tokyo",
    "France": "Paris",
    "Germany": "Berlin",
    "Australia": "Canberra"
}

print("Keys:")

for country in countries.keys():
    print(country, end=" ")

print("\nValues:")

for capital in countries.values():
    print(capital, end=" ")