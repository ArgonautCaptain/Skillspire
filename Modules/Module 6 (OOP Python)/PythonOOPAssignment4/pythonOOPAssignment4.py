import random

class BigCat:
  def __init__(self):
    self.speed = 5
    self.strength = 5
    self.intelligence = 5
    self.health = 5
    self.durability = 5

class Lion(BigCat):
  def __init__(self):
    super().__init__()
    self.strength = 50
    self.health = 50

  def king(self, other):
    if isinstance(other, Cheetah) and random.random() <= 0.8:
      print("Cheetah escaped unscathed! The Lion hurt itself chasing the Cheetah. It loses 25 health.")
      self.health -= 25
      if self.health <= 0:
        print("The Lion has died!")
      return
    else:
      print(f"The {type(other).__name__} was defeated by the Lion's king ability!")
      other.speed = 0
      other.strength = 0
      other.intelligence = 0
      other.health = 0
      other.durability = 0

class Leopard(BigCat):
  def __init__(self):
    super().__init__()
    self.strength = 30
    self.intelligence = 30
    self.health = 30

  def attack(self, other):
    if isinstance(other, Lion):
      other.king(self)
    elif isinstance(other, Cheetah) and random.random() <= 0.5:
      print("Cheetah escaped the Leopard unscathed! The Leopard hurt itself chasing the Cheetah. It loses 25 health.")
      self.health -= 25
      if self.health <= 0:
        print("The Leopard has died!")
      return
    else:
      print("The Cheetah failed to escape the Leopard's attack and loses 15 health!")
      other.health -= 15

class Cheetah(BigCat):
  def __init__(self):
    super().__init__()
    self.speed = 75
    self.strength = 25
    self.intelligence = 25
    self.health = 25
    self.durability = 25

  def run(self, other):
    if isinstance(other, Leopard):
      other.attack(self)
      if self.health <= 0:
        print("The Cheetah has died!")
    elif isinstance(other, Lion):
      other.king(self)
      if self.health <= 0:
        print("The Cheetah has died!")

def game():
  lion = Lion()
  leopard = Leopard()
  cheetah = Cheetah()

  animals = [lion, leopard, cheetah]

  print("Welcome!")
  print("You are a cheetah trying to survive in the same territory as a Lion and a Leopard.")
  input("Press Enter to continue...")
  print("-------------------------------------")

  user_cat = animals[2]

  while len([cat for cat in animals if cat.health > 0]) > 1:
    if user_cat.health > 0:
      other_cats = [cat for cat in animals if cat != user_cat and cat.health > 0]
      encounter_cat = random.choice(other_cats)

      print(f"Your Cheetah encountered a {type(encounter_cat).__name__} and tried to run.")
      input("Press Enter to see the result...")
      user_cat.run(encounter_cat)
      input("Press Enter to continue...")
      print("-------------------------------------")

      print(f"Current HP of Big Cats:")
      for cat in animals:
        print(f"{type(cat).__name__}: Health = {cat.health}")

    if user_cat.health <= 0 and leopard.health > 0 and lion.health > 0:
      print("Your cat is dead!")
      print("The Lion and the Leopard fight for dominance!")
      input("Press Enter to continue...")
      print("-------------------------------------")
      leopard.attack(lion)
      print("The Lion defeats the leopard with its king ability!")
      break

    input("Press Enter to continue...")
    print("-------------------------------------")

  if user_cat.health > 0:
    print("You have defeated all of the other big cats!")
  winner = max(animals, key=lambda x: x.health)
  print(f"The winner is: {type(winner).__name__} with {winner.health} health remaining.")

game()