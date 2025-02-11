sum_of_numbers = sum(range(1, 16))
print("Sum of numbers from 1 to 15:", sum_of_numbers)

for num in range(1, 101):
    if num % 2 == 0:
        print("BUZZ")
    else:
        print("FIZZ")

num_list = [10, 25, 7, 15, 30]

minimum = min(num_list)
maximum = max(num_list)
average = sum(num_list) / len(num_list)

print("Minimum:", minimum)
print("Maximum:", maximum)
print("Average:", average)