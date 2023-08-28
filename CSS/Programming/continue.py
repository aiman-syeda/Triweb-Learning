#Take input from the user
num1 = int(input('Enter start point:'))
num2 = int(input('Enter the end point:'))

#Use for loop to print the series
for i in range(num1,num2+1):
    if i%2 == 0:
        print('Even number is ', i)
        continue
    print('Odd number is', i)
    
    
