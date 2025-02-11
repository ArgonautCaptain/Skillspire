retail_price = 99

units_sold = int(input("Enter the number of units to be purchased: "))

if 10 <= units_sold <= 19:
    discount = 0.20
elif 20 <= units_sold <= 49:
    discount = 0.30
elif 50 <= units_sold <= 99:
    discount = 0.40
elif units_sold >= 100:
    discount = 0.50
else:
    discount = 0

subtotal = units_sold * retail_price
discount_amount = subtotal * discount
total_cost = subtotal - discount_amount

print("\n------ Receipt ------")
print(f"Units Sold: {units_sold}")
print(f"Discount Applied: {discount * 100}%")
print(f"Total Cost: ${total_cost:.2f}")