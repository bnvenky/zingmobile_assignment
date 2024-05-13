class Person:#class Person 
    def __init__(self, name, age, mobile):
        self.name = name
        self.age = age
        self.mobile = mobile

    def display_info(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Mobile:", self.mobile)

# Taking input from the user
name = input()
age = int(input())
mobile = input()

# Creating a Person object
person = Person(name, age, mobile)

# call Displaying information
person.display_info()