

function maths_table(num){     //Function declaration
    for (let i=1; i<=10; i++){                        
        let product = num * i;
        console.log(`${num} * ${i} = ${product}`);
    }   
}

maths_table(2);
console.log(product);  //Reference error beacause product is not called inside scope of the function
