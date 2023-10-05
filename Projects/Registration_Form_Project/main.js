document.addEventListener('DOMContentLoaded', function () {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const age = document.getElementById('age');
    const gen = document.getElementById('gen');
    const dob = document.getElementById('dob');
    const genValue = gen.value.trim();

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidContact = contact => {
    const contactPattern = /^[0-9]+$/;
    return contactPattern.test(contact) ;
}

const isValidGender = gen => {
    const genarr = ['male','female','others'];
    if (genarr.indexof(genValue) != -1) {
        return age
    }   
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const contactValue = contact.value.trim();
    const ageValue = age.value.trim();
    
    const dobValue = dob.value.trim();
    
    //Validate first name
    if(fnameValue === '') {
        setError(fname, 'Username is required');
    } else {
        setSuccess(fname);
    }
    //validate last name
    if(lnameValue === '') {
        setError(lname, 'Last name is required');
    } else {
        setSuccess(lname);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
    
    if (ageValue === '')  {
        setError(age, 'Enter your age');
    }else {
        setSuccess(age);
    }
    
    if (!isValidContact(contact) && contactValue.length != 10) {
        setError(contact, 'Enter valid contact number');
    }else {
        setSuccess(contact);
    }
   
    if (!isValidGender(gen)) {
        setError(gen,'Invalid gender');
    }else {
        setSuccess(gen);
    }
    
    

};
});
  


