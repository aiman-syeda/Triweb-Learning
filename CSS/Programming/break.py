fruits = ['apple', 'banana', 'grapes','pears', 'papaya', 'onion','pineapple', 'watermelon']
search = 'onion'

for fruit in fruits:
    if fruit==search:
        print('found')
        fruits.remove(search)
        break #After this statement is executed the control is directly transfered outside the loop
    
print(fruits)