import {useNavigate} from "react-router-dom";

import AddProductForm from "../components/products/AddProductForm";

function AddProduct() {
    const navigate = useNavigate();
    function addProductHandler(newProduct) {
        fetch("http://localhost:3002/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'content-Type': 'application/json'
            }
        })
            .then(response =>navigate('/',{replace:true}))
            .catch(err => console.log(err))
    }
    return <div><AddProductForm addProductHandler={addProductHandler} /></div>
}


export default AddProduct;