import random

print("Guess the result of a 6 sided die roll!")
user_guess = int(input("Enter your guess (1-6): "))
number_of_rolls = 0
guess_correct = False
while not guess_correct:
  die_roll = random.randint(1, 6)
  number_of_rolls += 1
  print("The die rolled:", die_roll)
  if user_guess == die_roll:
      print("Congratulations! You rolled a", user_guess, "after", number_of_rolls, "rolls!")
      guess_correct = True