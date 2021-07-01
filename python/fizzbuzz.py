import sys

inputs = sys.argv
inputs.pop(0)

for num in inputs:
    str_num = int(num)

    if str_num % 3 == 0 and str_num % 5 == 0:
        print("fizzbuzz")
    elif str_num % 5 == 0:
        print("buzz")
    elif str_num % 3 == 0:
        print("fizz")
    else:
        print(str_num)
        
