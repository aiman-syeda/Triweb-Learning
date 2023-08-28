num1 = int(input('Enter start point:'))
num2 = int(input('Enter the end point:'))
gap1 = 3
gap2 = -1
count = 0
while num1 <= num2:
    print(num1)
    if count % 2 == 0:
         num1 += gap1
    else:
         num1 += gap2
    count += 1