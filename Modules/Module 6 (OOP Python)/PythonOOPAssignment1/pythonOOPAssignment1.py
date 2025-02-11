class Car:
  def __init__(self, topSpeed):
    self.topSpeed = topSpeed
    self.location = 0
  def displayTopSpeed(self):
    print("Car has top speed:", self.topSpeed, "miles per hour")
  def drive(self):
    self.location = self.location + 10
    print("driving 10 additional miles...")
  def stop(self):
    print("Current miles driven:", self.location, "miles")

corolla = Car(114)
corolla.displayTopSpeed()
corolla.drive()
corolla.drive()
corolla.drive()
corolla.stop()