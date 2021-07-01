class Citizen:
    "Getting citizen information"
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def full_name(self):
        return self.first_name + " " + self.last_name

    greeting = "For the glory of Python!"

    #greeting as function
    # def greeting(self,message):
    #     return message + self.full_name()


person = Citizen('Adam', 'Saulnier')

print(person.first_name)
print(person.last_name)
print(person.full_name())