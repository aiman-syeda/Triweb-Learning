import Product_List from "./products/Product_List";
function Product() {
    let products = [
        {
            id: "p-1",
            book_name: "Rich Dad poor Dad",
            author: "Robert T. Kiyosaki",
            description: "Rich Dad Poor Dad is Robert's story of growing up with two dads  his real father and the father of his best friend, his rich dad  and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
            price: "800",
            image: "https://m.media-amazon.com/images/I/51u8ZRDCVoL.jpg",
            language: "English"
        },
        {
            id: "p-2",
            book_name: "The Power of Letting Go",
            author: "John Purkiss",
            description: "In The Power of Letting Go, John Purkiss explains why we should let go and how we can do it, using proven techniques to make things happen.",
            price: "1400",
            image: "https://m.media-amazon.com/images/I/41Ag48Yhi7L.jpg",
            language: "English"
        },
        {
            id: "p-3",
            book_name: "Reclaim Your Heart",
            author: "Yasmin Mogahed ",
            description: "Reclaim Your Heart is not just a self-help book. It is a manual about the journey of the heart in and out of the ocean of this life. It is a book about how to keep your heart from sinking to the depths of that ocean, and what to do when it does. It is a book about redemption, about hope, about renewal. Every heart can heal, and each moment is created to bring us closer to that transformative return. Reclaim Your Heart is about finding that moment when everything stops and suddenly looks different. It is about finding your own awakening. And then returning to the better, truer, and freer version of yourself. Many of us live our lives, entrapped by the same repeated patterns of heartbreak and disappointment. Many of us have no idea why this happens. Reclaim Your Heart is about freeing the heart from this slavery. It is about the journey in an out of life's most deceptive traps. This book was written to awaken the heart and provide a new perspective on love, loss, happiness, and pain. Providing a manual of sorts, Reclaim Your Heart will teach readers how to live in this life without allowing life to own you. It is a manual of how to protect your most prized possession: the heart.",
            price: "700",
            image: "https://m.media-amazon.com/images/I/81hzIRvmLPL._AC_UF1000,1000_QL80_.jpg",
            language: "English"
        },
        {
            id: "p-4",
            book_name: "30 Bedtime Stories",
            author: "Tamara Rittershaus, Bachar Karroum ",
            description: "Featuring 30 heartwarming stories suitable for kids 5 years and above, this book is the perfect way to instill Islamic values in your child. Each day, your child will discover a new story that imparts valuable lessons and timeless values, fostering character development and personal growth in young minds.",
            price: "500",
            image: "https://images-eu.ssl-images-amazon.com/images/I/81kzo5PwkUL._AC_UL600_SR600,600_.jpg",
            language: "English"
        }

    ]

    return <div>

        <Product_List products={products} />

    </div>
}



export default Product;