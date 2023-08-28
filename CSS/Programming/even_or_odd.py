#Find even or odd numbers 

#Take input from the user
number = int(input('Enter the number of terms:'))


#Use conditional statements to find the number is even or odd and loop it to get series.
for i in range(number):
    number=i+1
    if number % 2 == 0:
        print('Even number',number)
    else:
        print('Odd number', number)


