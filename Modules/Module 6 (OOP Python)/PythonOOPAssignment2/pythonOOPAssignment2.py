class Boxer:
  def __init__(self, size, strength, wins, losses):
    self.size = size
    self.strength = strength
    self.wins = wins
    self.losses = losses
  def boxerStats(self):
    print("Boxer has size:", self.size, "and strength:", self.strength)
    print("Boxer's record is", self.wins, "wins and", self.losses, "losses")