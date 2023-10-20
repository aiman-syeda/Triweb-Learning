import Product_List from "./products/Product_List";
import { useState, useEffect } from "react";

function Product() {
    let [products,setProducts] = useState([]);
    let [isdataFetching,setisDataFetching] = useState(true);

    useEffect(() => {
        setisDataFetching(true);
        fetch("http://localhost:3002/product")
        .then(response => response.json())
        .then(responseData => {
            setisDataFetching(false);
            setProducts(responseData.data);
        })
        .catch(err => console.log(err))
    },[])

    

    if (isdataFetching) {
        return <div>
            Please wait...
        </div>
    }

    return <div>

        <Product_List products={products} />

    </div>
}



export default Product;