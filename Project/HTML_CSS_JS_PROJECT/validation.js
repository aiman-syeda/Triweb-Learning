let Myuser = null;   //global variable

const salmon_block = document.getElementById('salmon_block');
const maroon_block = document.getElementById('maroon_block');
const indigo_block = document.getElementById('indigo_block');
const teal_block = document.getElementById('teal_block');

const add_user = document.getElementById('add_user');
const delete_user = document.getElementById('delete_user');

const move_to_Salmon = document.getElementById('move_to_Salmon');
const move_to_maroon = document.getElementById('move_to_maroon');
const move_to_indigo = document.getElementById('move_to_indigo');
const move_to_teal = document.getElementById('move_to_teal');

const username = document.getElementById('username');

function adduser(){
    if (Myuser == null){
        Myuser = document.createElement('div');     //Create a div to manipulate with the user name
        Myuser.className =  "My_user";              //Create class of the div
        Myuser.setAttribute('id','Myuser') ;
        Myuser.innerHTML = username.value;          //Create id of the div element
        salmon_block.append(Myuser);
        username.disabled = true;                  // do not allow input to take another value when one is already taken
        add_user.disabled = true;
        delete_user.disabled = false;             //disable delete button while username is still not added
    }
    
    
}
// Function to delete user name
function deleteuser(){
    
    
    if (Myuser != null){
        Myuser.remove();
        username.disabled = false; 
        add_user.disabled = false;
        username.value = '';
        Myuser = null;
    }
    delete_user.disabled = true;
}
add_user.addEventListener('click',adduser);
delete_user.addEventListener('click',deleteuser);

function movetosalmon(){
    if (Myuser != null){
        salmon_block.append(Myuser);
    }
}
function movetomaroon(){
    if (Myuser != null){
        maroon_block.append(Myuser);
    }
}
function movetoindigo(){
    if (Myuser != null){
        indigo_block.append(Myuser);
    }
}
function movetoteal(){
    if (Myuser != null){
        teal_block.append(Myuser);
    }
}
move_to_Salmon.addEventListener('click',movetosalmon);
move_to_maroon.addEventListener('click',movetomaroon);
move_to_indigo.addEventListener('click',movetoindigo);
move_to_teal.addEventListener('click',movetoteal);






