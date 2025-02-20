import random

class Human:
  def __init__(self, name, strength=3, intelligence=3, dexterity=3, health=100):
    self.name = name
    self.strength = strength
    self.intelligence = intelligence
    self.dexterity = dexterity
    self.health = health

  def attack(self, other):
    damage = 5 * self.strength
    other.health -= damage
    print(f"{self.name} attacks {other.name} for {damage} damage!")
    input("Press Enter to continue...")

class Wizard(Human):
  def __init__(self, name):
    super().__init__(name, intelligence=25, health=50)

  def heal(self, other):
    self.health += 10 * self.intelligence
    print(f"{self.name} heals for {10 * self.intelligence} health!")
    input("Press Enter to continue...")

  def fireball(self, other):
    damage = random.randint(20, 50)
    other.health -= damage
    print(f"{self.name} casts fireball on {other.name} for {damage} damage!")
    input("Press Enter to continue...")

class Ninja(Human):
  def __init__(self, name):
    super().__init__(name, dexterity=175)

  def steal(self, other):
    self.health += 10
    print(f"{self.name} steals 10 health!")
    self.attack(other)

  def get_away(self, other):
    self.health -= 15
    print(f"{self.name} tries to dodge and loses 15 health!")
    input("Press Enter to continue...")

class Samurai(Human):
  def __init__(self, name):
    super().__init__(name, health=200)

  def death_blow(self, other):
    if other.health < 50:
      other.health = 0
      print(f"{self.name} performs death blow on {other.name}, reducing their health to 0!")
      input("Press Enter to continue...")
    else:
      self.attack(other)

  def meditate(self, other):
    self.health = 200
    print(f"{self.name} meditates and restores health to full!")
    input("Press Enter to continue...")

def create_character():
  classes = {"1": Wizard, "2": Ninja, "3": Samurai}
  print("Select your class:\n1. Wizard\n2. Ninja\n3. Samurai")
  choice = input("Enter the number of your choice: ")
  name = input("Enter your character's name: ")
  return classes[choice](name)

def generate_fantasy_name():
    prefixes = ["Aer", "Bel", "Cinder", "Dra", "Eld", "Fael", "Glim", "Hael", "Jor", "Kael", "Lyn", "Myr", "Nor", "Oryn", "Pyr", "Qel", "Ryn", "Syl", "Tor", "Vael"]
    suffixes = ["anor", "dir", "dor", "ian", "iel", "ion", "mir", "nor", "rin", "tar", "wyn", "yth", "iel", "ion", "ius", "iel"]

    num_parts = random.randint(1, 2)
    name_parts = []

    if num_parts == 1:
        name_parts.append(random.choice(prefixes) + random.choice(suffixes))
    else:
         name_parts.append(random.choice(prefixes))
         name_parts.append(random.choice(suffixes))
    return "".join(name_parts)

def create_opponent():
  classes = [Wizard, Ninja, Samurai]
  opponent_class = random.choice(classes)
  opponent_name = generate_fantasy_name()
  return opponent_class(opponent_name)

class Fight:

  def __init__(self, player):
    self.player = player
    opponent = create_opponent()
    self.opponent = opponent
    print("-------------------------------------")
    print(f"Your character: {player.name}, Class: {player.__class__.__name__}")
    input("A new challenger approaches... Press Enter to continue...")
    print(f"Opponent character: {opponent.name}, Class: {opponent.__class__.__name__}")
    input("Press Enter to start the fight...")

  def player_turn(self):
    print("-------------------------------------")
    abilities = {
      "Wizard": ["attack", "heal", "fireball"],
      "Ninja": ["attack", "steal", "get_away"],
      "Samurai": ["attack", "death_blow", "meditate"]
    }
    print(f"\nYour turn, {self.player.name}!")
    print("Choose an ability:")
    for i, ability in enumerate(abilities[self.player.__class__.__name__], 1):
      print(f"{i}. {ability}")
    choice = int(input("Enter the number of your choice: ")) - 1
    getattr(self.player, abilities[self.player.__class__.__name__][choice])(self.opponent)
    self.display_health()

  def opponent_turn(self):
    print("-------------------------------------")
    abilities = {
      "Wizard": ["attack", "heal", "fireball"],
      "Ninja": ["attack", "steal", "get_away"],
      "Samurai": ["attack", "death_blow", "meditate"]
    }
    print(f"\n{self.opponent.name}'s turn!")
    input("Press Enter to continue...")
    ability = random.choice(abilities[self.opponent.__class__.__name__])
    getattr(self.opponent, ability)(self.player)
    self.display_health()

  def display_health(self):
    print(f"\n{self.player.name}'s health: {self.player.health}")
    print(f"{self.opponent.name}'s health: {self.opponent.health}")

  def start(self):
    while self.player.health > 0 and self.opponent.health > 0:
      self.player_turn()
      if self.opponent.health <= 0:
        print(f"\n{self.opponent.name} has been defeated! You win!")
        break
      self.opponent_turn()
      if self.player.health <= 0:
        print(f"\n{self.player.name} has been defeated! You lose!")
        break

user_character = create_character()


fight = Fight(user_character)
fight.start()

while True:
  print("\nWould you like to keep fighting?")
  choice = input("Enter 'yes' to continue or 'no' to quit: ").strip().lower()
  if choice == 'yes':
    fight = Fight(user_character)
    fight.start()
  else:
    print("Thank you for playing!")
    break