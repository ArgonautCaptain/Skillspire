import random

def generate_random_numbers(start, end):
  return random.randint(start, end)


start = int(input("Enter the lower bound: "))
end = int(input("Enter the upper bound: "))
random_number = generate_random_numbers(start, end)
print(f"The random number between {start} and {end} is: {random_number}")