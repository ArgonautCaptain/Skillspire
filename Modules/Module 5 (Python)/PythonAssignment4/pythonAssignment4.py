import random

actual_number = random.randint(1, 10)
guess_correct = False
guess_valid = False

while not guess_correct:
  print("Please enter a number between 1 and 10:")
  guess_number = int(input())

  if guess_number < 1 or guess_number > 10:
      print("Invalid number")
      guess_valid = False
  else:
      guess_valid = True

  if guess_valid:
    if guess_number == actual_number:
        print("Congratulations! You guessed the correct number, which was", actual_number)
        guess_correct = True
    else:
        if guess_number < actual_number:
            print("Your guess is too low. Try again.")
        else:
            print("Your guess is too high. Try again.")
