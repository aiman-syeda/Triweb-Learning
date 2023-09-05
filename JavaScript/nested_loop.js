m = 6;  //This is a random nuber from the user
let i,j;
outer:
for (i=1; i<=m; i++){
    inner:
    for (j=1; j<=m; j++){
        console.log(i,j);
        if (i==j){
            continue outer;
        }    
    }   
}

