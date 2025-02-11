user_age = int(input("Enter your age: "))
if user_age < 0 or user_age > 120:
    print("Invalid age")
elif user_age < 16:
    print("Stay home, study, and get your drivers license")
elif user_age < 21:
    print("Have some fun, but not TOO much fun. You're still a young adult")
else:
    print("Have fun. But be responsible. You are in control of your life")