full_name = "Jason Updegraff"

last_name = "Updegraff"
if full_name.find(last_name) != -1:
    print(f"'{full_name}' contains the last name '{last_name}'.")
else:
    print(f"'{full_name}' does not contain the last name '{last_name}'.")

username = "JasonUpdegraff123"

if username.isalnum():
    print(f"'{username}' is a valid username (contains only letters and numbers).")
else:
    print(f"'{username}' is NOT a valid username (contains special characters or spaces).")
