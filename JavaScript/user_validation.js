function user_validation(name,password){
    if (name == '' || name.length == 0){
        console.log('Invalid User name');
    } else if(password == null || password.length < 8) {
        console.log('Inavlid password');
    } else {
        console.log('Successfully validated')
    }
}

let uname = 'assd';
let upassword = '12345678';
user_validation(uname,upassword);