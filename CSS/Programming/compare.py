#Compare 3 numbers using nested if 

n1 = int(input('Enter a number:'))
n2 = int(input('Enter a number:'))
n3 = int(input('Enter a number:'))

if n1 > n2:
    if n1 > n3:
        print('larger number:', n1)
    else:
        print('larger number:', n3)

else:
    if n2 > n3:
        print('larger number:', n2)
    else:
        print('Larger number:', n3)

