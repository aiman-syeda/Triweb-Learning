import Product_Item from "./Product_Item";

function Product_List(props) {
    return <div>
        {props.products.map((item) => {
            return <Product_Item key={item.id} id={item.id} item={item} />
        })}
    </div>
}

export default Product_List;