hours_worked = int(input("Enter the number of hours worked this week: "))
pay_rate = int(input("Enter the regular hourly pay rate: "))
if hours_worked <= 40:
  print(f"Regular hours worked: {hours_worked}")
  total_pay = hours_worked * pay_rate
  print(f"Total pay for the week is: ${total_pay}")
elif hours_worked > 40:
  overtime_hours = hours_worked - 40
  print(f"Regular hours worked: 40")
  print(f"Regular pay: ${40 * pay_rate}")
  print(f"Overtime hours worked: {overtime_hours}")
  print(f"Overtime pay: ${overtime_hours * pay_rate * 1.5}")
  total_pay = (40 * pay_rate) + (overtime_hours * pay_rate * 1.5)
  print("\n------ Total ------")
  print(f"Total pay for the week is: ${total_pay}")