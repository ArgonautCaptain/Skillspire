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
            self.health -= 25
            if self.health <= 0:
                return
        else:
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
            self.health -= 25
            if self.health <= 0:
                return
        else:
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
        elif isinstance(other, Lion):
            other.king(self)

def game():
    lion = Lion()
    leopard = Leopard()
    cheetah = Cheetah()

    animals = [lion, leopard, cheetah]

    user_cat = animals[2]

    while len([cat for cat in animals if cat.health > 0]) > 1:
        if user_cat.health > 0:
            other_cats = [cat for cat in animals if cat != user_cat and cat.health > 0]
            encounter_cat = random.choice(other_cats)
            user_cat.run(encounter_cat)

        if user_cat.health <= 0 and leopard.health > 0 and lion.health > 0:
            leopard.attack(lion)
            break

    winner = max(animals, key=lambda x: x.health)
    return type(winner).__name__

def main():
    num_runs = int(input("Enter the number of times to run the game: "))
    results = {"Lion": 0, "Leopard": 0, "Cheetah": 0}

    for _ in range(num_runs):
        winner = game()
        results[winner] += 1

    print("Results after running the game {} times:".format(num_runs))
    for cat, wins in results.items():
        print(f"{cat}: {wins} wins")

main()