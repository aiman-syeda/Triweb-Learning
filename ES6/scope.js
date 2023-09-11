//Variable earlier have un blocked scope where as let gives blocked scope

//Scope of let or const lies within the flower braces whether they are loops or functions

//Example

{
    var x = 4;
    let y = 3;
}
console.log(x);
console.log(y);  //Throws reference error beacuase 
//the scope of let variable lies within the bracec

