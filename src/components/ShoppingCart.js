import { useContext, useReducer } from "react"
import { TYPES } from "../actions/shoppingActions";
import Navbar from "../Navbar";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import { useGlobalContext } from './ShoppingContext'

const ShoppingCart = function () {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products, cart, totalCart, totAmount } = state;

    const addToCart = (id) => {
        // console.log("id:"+id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
        dispatch({ type: TYPES.ADD_TOT_CART });
        dispatch({ type: TYPES.TOGGLE_AMOUNT });

    };

    const removeFromCart = (id, all = false) => {
        if (all) {
            console.log(all);
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
            dispatch({ type: TYPES.REMOVE_TOT_CART });
        }
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART });
    };

    return (
        <>
            <table>
                <tr>
                    <th style={{ width: '1200px' }}>
                        <h2>Available products</h2>
                    </th>
                    <th>
                        <p> {'Total Items: ' + totalCart} </p>
                        <button className='clearButton' onClick={clearCart}>Clear Cart</button>
                        <br />
                    </th>
                </tr>
                <td>
                    <article className="myBoxCart grid-responsive">
                        {products.map((product) => (
                            <ProductItem key={product.id} data={product} addToCart={addToCart} />
                        ))}
                    </article>
                </td>
                <td>
                    <article className="myBoxCart2  grid-responsive">
                        {cart.map((item, index) => (
                            <CartItem key={index} data={item} removeFromCart={removeFromCart} />
                        ))}
                    </article>
                </td>

            </table>
        </>
    )
}

export default ShoppingCart
