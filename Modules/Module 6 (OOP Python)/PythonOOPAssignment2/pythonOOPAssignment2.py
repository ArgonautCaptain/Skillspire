class Boxer:
  def __init__(self, name, size, strength, wins, losses):
    self.name = name
    self.size = size
    self.strength = strength
    self.wins = wins
    self.losses = losses
    self.points = 0
  def boxerStats(self):
    print(self.name, "has size:", self.size, "and strength:", self.strength)
    print(self.name + "'s record is", self.wins, "wins and", self.losses, "losses")

boxerOne = Boxer("Muhammad Ali", 214, 8, 56, 5)
boxerTwo = Boxer("Joe Louis", 214, 10, 68, 3)
boxerOne.boxerStats()
boxerTwo.boxerStats()

boxerSelection = int(input("Enter 1 to bet on Muhammad Ali or 2 to bet on Joe Louis: "))
if boxerSelection == 1:
  print("You have selected Muhammad Ali")
elif boxerSelection == 2:
  print("You have selected Joe Louis")
else:
  print("Invalid selection")

""" The boxers are matched up against each other. A winner is determined for each category: size, strength, and record. A tie awards a point to each boxer. Whichever boxer has the highest total points after tallying each of the four categories is declared the winner. If the user selects the boxer with the most points, they win their bet """
if boxerOne.size > boxerTwo.size:
  boxerOne.points += 1
  print(boxerOne.name, "has the size advantage")
elif boxerOne.size < boxerTwo.size:
  boxerTwo.points += 1
  print(boxerTwo.name, "has the size advantage")
else:
  boxerOne.points += 1
  boxerTwo.points += 1
  print("Both boxers are the same size")
if boxerOne.strength > boxerTwo.strength:
  boxerOne.points += 1
  print(boxerOne.name, "has the strength advantage")
elif boxerOne.strength < boxerTwo.strength:
  boxerTwo.points += 1
  print(boxerTwo.name, "has the strength advantage")
else:
  boxerOne.points += 1
  boxerTwo.points += 1
  print("Both boxers have the same strength")
if boxerOne.wins > boxerTwo.wins:
  boxerOne.points += 1
  print(boxerOne.name, "has more career wins")
elif boxerOne.wins < boxerTwo.wins:
  boxerTwo.points += 1
  print(boxerTwo.name, "has more career wins")
else:
  boxerOne.points += 1
  boxerTwo.points += 1
  print("Both boxers have the same number of career wins")
if boxerOne.losses < boxerTwo.losses:
  boxerOne.points += 1
  print(boxerOne.name, "has fewer career losses")
elif boxerOne.losses > boxerTwo.losses:
  boxerTwo.points += 1
  print(boxerTwo.name, "has fewer career losses")
else:
  boxerOne.points += 1
  boxerTwo.points += 1
  print("Both boxers have the same number of career losses")
print(boxerOne.name, "has", boxerOne.points, "total points this match")
print(boxerTwo.name, "has", boxerTwo.points, "total points this match")
if boxerOne.points > boxerTwo.points:
  print(boxerOne.name, "wins!")
  if boxerSelection == 1:
    print("You win your bet!")
  else:
    print("You lose your bet!")
elif boxerOne.points < boxerTwo.points:
  print(boxerTwo.name, "wins!")
  if boxerSelection == 2:
    print("You win your bet!")
  else:
    print("You lose your bet!")
else:
  print("It's a tie!")
  print("You lose your bet!")