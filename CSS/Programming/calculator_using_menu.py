#Program to basic calculator
import os

def addition(num1,num2):
    print('Addition')
    sum = num1 + num2
    print(sum)

def subtraction(num1,num2):
    print('Subtraction')
    difference = num1 - num2
    print(difference)

def multiplication(num1,num2):
    print('Multiplication')
    product = num1 * num2
    print(product)

def division(num1,num2):
    print('Division')
    quotient = num1 / num2
    print(quotient)

while 1:
    os.system('clear')
    print('Press 1 for Addition:')
    print('Press 2 for subtraction:')
    print('Press 3 for multiplication:')
    print('Press 4 for division:')
    print('Press 0 to exit:')
    user_input = int(input('Enter your option:'))
    if user_input == 0:
        break
    num1 = int(input('Enter fisrt value:'))
    num2 = int(input('Enter second value:'))
    
    if user_input == 1:
        addition(num1, num2)
    elif user_input == 2:
        subtraction(num1,num2)
    elif user_input == 3:
        multiplication(num1,num2)
    elif user_input == 4:
        division(num1,num2)
    else:
        print('Invalid input!')
    input('Please press enter to continue...')
        