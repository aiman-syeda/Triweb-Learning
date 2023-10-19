import AddProductForm from "../components/products/AddProductForm";

function AddProduct(){
    function addProductHandler(newProduct){
        console.log(newProduct);
        fetch("http://localhost:3002/product",{
            method:"POST",
            body:JSON.stringify(newProduct),
            headers:{
                'content-Type':'application/json'
            }

        })
    }
    return <div><AddProductForm addProductHandler={addProductHandler}/></div>
}


export default AddProduct;