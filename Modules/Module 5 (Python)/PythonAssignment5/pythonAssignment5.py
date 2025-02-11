import random

playing = True
while playing:
  computer_choice = random.randint(1, 3)
  valid_choice = False

  while not valid_choice:
    user_choice = int(input("Enter your choice (1 for Rock, 2 for Paper, 3 for Scissors): "))
    if user_choice in [1, 2, 3]:
      valid_choice = True
    else:
      print("Invalid choice. Please try again.")

  user_choice_string = ""
  if user_choice == 1:
      user_choice_string = "Rock"
  elif user_choice == 2:
      user_choice_string = "Paper"
  elif user_choice == 3:
      user_choice_string = "Scissors"
  print("You chose:", user_choice_string)

  computer_choice_string = ""
  if computer_choice == 1:
      computer_choice_string = "Rock"
  elif computer_choice == 2:
      computer_choice_string = "Paper"
  elif computer_choice == 3:
      computer_choice_string = "Scissors"
  print("Computer chose:", computer_choice_string)

  if user_choice == computer_choice:
      print("It's a tie!")
  elif (user_choice == 1 and computer_choice == 3) or (user_choice == 2 and computer_choice == 1) or (user_choice == 3 and computer_choice == 2):
      print("You win!", user_choice_string, "beats", computer_choice_string)
  else:
      print("You lose!", computer_choice_string, "beats", user_choice_string)

  play_again = input("Do you want to play again? (yes/no): ")
  if play_again.lower() != "yes" and play_again.lower() != "y":
      playing = False
print("Thanks for playing!")