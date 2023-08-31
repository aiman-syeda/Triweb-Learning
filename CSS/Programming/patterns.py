#Print patterns using python loops

i = 1
while i <= 10:
    k = 1
    while k <= i:
        j = 1
        while j <= i:
             print('*',end=" ")
             j += 1
        k += 1
        print()
    i += 1
    print()