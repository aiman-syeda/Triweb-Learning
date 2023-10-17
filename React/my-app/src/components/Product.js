function Product() {
    let products = [
        {
            id: "p-1",
            book_name: "Rich Dad poor Dad",
            description: "know why rich peaople are becoming more rich",
            price: "800",
            language: "English"
        },
        {
            id: "p-2",
            book_name: "Tales from Quran",
            description: "Brief of tales of prophets from Quran",
            price: "400",
            language: "English"
        }
    ]

    return <div className="products">
        <ul >
            {products.map((item) => {
                return <li key={item.id}>{item.book_name}</li>;
            })}
        </ul>
    </div>
}



export default Product;