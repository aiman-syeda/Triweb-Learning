#Print the sequence in one line 1  4  3  6  5  8  7  10  9  12...

num1 = int(input('Enter start point:'))
num2 = int(input('Enter the end point:'))
gap1 = 3
gap2 = -1
count = 0
while num1 <= num2:
    print(num1,end = '  ')  # use of end by assigning a space will print the output in a single line
    if count % 2 == 0:
         num1 += gap1
    else:
         num1 += gap2
    count += 1