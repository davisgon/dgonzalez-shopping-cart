// Componet Cart Item, is created when add product to car

const CartItem = ({ data, removeFromCart }) => {

    return (
        <div>
            <img src={data.img} alt={data.title} className="my-cart-img" />
            <h4>{data.title}</h4>
            <h5>
                ${data.price}  x {data.quantity} = $ {(data.price * data.quantity).toFixed(2)}
            </h5>
            <button className='amount-btn' onClick={() => removeFromCart(data.id)}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
            </button>
            <br />
            <button className='remove-btn' onClick={() => removeFromCart(data.id, true)}>  Remove </button>
            <hr />
            <br />
            <br />
        </div>
    );
};

export default CartItem;