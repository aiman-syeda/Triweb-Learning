#Install yagmail in an environment using code 'source /path/to/virtualenv/bin/activate',this code is valid for macOS and linux.
#Run the code in the env you have installed.

#import necessary library
import yagmail

#Take inputs from the user
user = input('Enter From address:')

#Perform 2 step verification for gmail and get the code 
app_code = input('Generate password by 2 step verification for gmail:')
to = input('Enter to address:')
subject = input('Enter subject:')
content = input('Enter the message:')

with yagmail.SMTP(user, app_code) as yag:
    yag.send(to, subject, content)

