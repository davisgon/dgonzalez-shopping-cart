 
const ProductItem = ({ data, addToCart }) => {
    let { id, img, title, price } = data;
    return (
        <div style={{ border: "thin solid gray", padding: "1rem" }}>
            <img src={data.img} alt={data.title} className="my-cart-img" />
            <h4>{title}</h4>
            <h5>${price} </h5>

            <button className='amount-btn' onClick={() => addToCart(id)}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                </svg>
            </button>
             
            
        </div>
    );
};

export default ProductItem;