const CartItem = ({ data, delFromCart }) => {

    return (
        <div style={{ borderBottom: "thin solid gray" }}>
            <img src={data.img} alt={data.title} className="my-cart-img" />
            <h4>{data.title}</h4>
            <h5>
                ${data.price}  x {data.quantity} = $ {(data.price * data.quantity).toFixed(2)}
            </h5>
            <button onClick={() => delFromCart(data.id)}>Remove One</button>
            <button onClick={() => delFromCart(data.id, true)}>Remove All</button>
            <br />
            <br />
        </div>
    );
};

export default CartItem;