/* Use try catch error to handle with errors*/
 function validateuserprofile(uname,password){
    try {
        if (uname.length < 5){
            throw new Error('Invalid username');
        } 
        if (password.length < 8){
            throw new Error('Invalid password');
        }
        console.log('In progress');
        return 'Still working';
     } catch(error) {
            console.log(error);
            return 'fail in catch';
     } finally{
        console.log('I am inside finally block');
        return 'From finally';   //overwrites previous return
     }
 }


 let myname = 'asdb';
 let mypassword = 'aswdsc';
 console.log(validateuserprofile(myname,mypassword));


