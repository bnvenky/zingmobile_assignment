def validate_password(password):
    if len(password) < 8:
        return False
    if not any(char.isupper() for char in password):
        return False
    if not any(char.islower() for char in password):
        return False
    if not any(char.isdigit() for char in password):
        return False
    if not any(char in '_@$&' for char in password):
        return False
    return True

# Test case
password = input()# take input from user
if validate_password(password):
    print("Password is valid")
else:
    print("Password is invalid")