#Code to print table of any number given by the user

num = int(input('Enter the number:'))
product = 0   #To store the product 
i = 1     #initial value for while loop
while i <= 10:
    product = num * i
    i +=1
    print(num, '*', i-1 ,'=', product )   #display the result in table form

