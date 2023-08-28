print('To print dynamic range')

#Take input from the user
num1 = int(input('Enter start point:'))
num2 = int(input('Enter the end point:'))
gap = int(input('Enter the gap:'))


#Use while loop to print the series

while num1 <= num2:
    print(num1)
    num1 += gap
    gap += 1
    
    
