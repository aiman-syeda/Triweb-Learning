# A function calls it self to perform iterative tasks is known as Recursion

def PrintNaturalNumbers(i):
    if i > 20:
        return
    else:
        print(i)
    PrintNaturalNumbers(i+1)
    
PrintNaturalNumbers(1)