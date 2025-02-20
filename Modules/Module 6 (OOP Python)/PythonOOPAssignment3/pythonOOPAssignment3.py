class Person:
  def __init__(self, name, id_number):
    self.name = name
    self.id_number = id_number

  def display(self):
    print(f"Name: {self.name}, ID Number: {self.id_number}")

class Employee(Person):
  def __init__(self, name, id_number, salary, post):
    super().__init__(name, id_number)
    self.salary = salary
    self.post = post

  def display(self):
    super().display()
    print(f"Salary: {self.salary}, Post: {self.post}")

person = Person("John Doe", 12345)
person.display()

employee = Employee("Jane Smith", 67890, 50000, "Manager")
employee.display()