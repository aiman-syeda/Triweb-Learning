#Print alphabets taking user's choice
import os
while 1:
    os.system('clear')
    print('Press 1 to print A:')
    print('Press 2 to print B:')
    print('Press 3 to print c:')
    print('Press 4 to print D:')
    print('Press 0 to exit:')
    user_inp = int(input('Enter your option:'))
    if user_inp == 1:
        print('A')
    elif user_inp == 2:
        print('B')
    elif user_inp == 3:
        print('C')
    elif user_inp == 4:
        print('D')
    elif user_inp == 0:
        break
    else:
        print('Invalid input!')
    input('press enter to continue...  ')


