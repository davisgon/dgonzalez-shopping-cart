const CartItem = ({ data, delFromCart }) => {
    let { id, title, price, img, quantity } = data;

    return (
        <div style={{ borderBottom: "thin solid gray" }}>
            <h4>{title}</h4>
            <h5>
                ${price}  x {quantity} = ${price * quantity} 
            </h5>
            <img src={data.img} alt={data.title} className="my-cart-img" />
            <button onClick={() => delFromCart(id)}>Remove One</button>
            <button onClick={() => delFromCart(id, true)}>Remove All</button>
            <br />
            <br />
        </div>
    );
};

export default CartItem;