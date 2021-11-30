import { useReducer } from "react"
import { TYPES } from "../actions/shoppingActions";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer"
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";


const ShoppingCart = function () {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products, cart, totalCart, totAmount } = state;
    let type = 'dec';

    const addToCart = (id) => {
        // console.log("id:"+id);
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
        dispatch({ type: TYPES.ADD_TOT_CART });
        dispatch({ type: TYPES.TOGGLE_AMOUNT });

    };

    const delFromCart = (id, all = false) => {
        //console.log(id, all);
        if (all) {
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
                        <h3>Products</h3>
                    </th>
                    <th>
                        <button onClick={clearCart}>Clear Cart --></button>
                         {totalCart}
                        <br />
                      
                    </th>
                </tr>
                <td>
                    <article className="box grid-responsive">
                        {products.map((product) => (
                            <ProductItem key={product.id} data={product} addToCart={addToCart} />
                        ))}
                    </article>
                </td>
                <td>
                    <article className="box2  grid-responsive">
                        {cart.map((item, index) => (
                            <CartItem key={index} data={item} delFromCart={delFromCart} />
                        ))}
                    </article>
                </td>

            </table>
        </>
    )
}

export default ShoppingCart