const ProductItem = ({ data, addToCart }) => {
    let { id, img,title, price } = data;
    return (
        <div style={{ border: "thin solid gray", padding: "1rem" }}>
             <img src={data.img} alt={data.title} className="my-cart-img" />
            <h4>{title}</h4>
            <h5>${price} </h5>
            <button onClick={() => addToCart(id)}>Add</button>
        </div>
    );
};

export default ProductItem;