prices = [120, 100, 105, 90, 130, 125, 150, 80]

buy_price = prices[0]
min_price = prices[0]

max_profit = 0
best_buy = 0
best_sell = 0

for i in range(1, len(prices)):

    profit = prices[i] - min_price

    if profit > max_profit:
        max_profit = profit
        best_buy = min_price
        best_sell = prices[i]

    if prices[i] < min_price:
        min_price = prices[i]

print("Maximum profit:", max_profit)

if max_profit > 0:
    print("Buy price:", best_buy)
    print("Sell price:", best_sell)
else:
    print("No profit possible")