print('To print dynamic range in reverse order')

#Take input from the user
num1 = int(input('Enter end point:'))
num2 = int(input('Enter the least point:'))
gap = int(input('Enter the gap:'))
#Use while loop to print the series and we decreament the num value to run reverse loop
while num1 >= num2:
    print(num1)
    num1-=gap