# Simple Calculator with addition, subtraction, division and multiplication

# Reserve a variable to store result
result = float()

# Take inputs from the user
num1 = float(input('Enter a number:'))
ope = input('Enter the operator:')
num2 = float(input('Enter the second number:'))

#Perform operation using if elif statement
if ope == '+':
    result = num1 + num2
elif ope =='*':
    result = num1 * num2
elif ope =='-':
    result = num1 - num2
elif ope == '%' & num2 != 0:
    result = num1 % num2
elif ope == '/' & num2 != 0:
    result = num1 / num2
else:
    print('Invalid operator!')

# Print the result
print('The result is:', result)

