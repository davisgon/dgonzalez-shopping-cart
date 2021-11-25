import { TYPES } from "../actions/shoppingActions";
import cartItems from '../data'
//import useEffect from 'react'

/* useEffect(() => {
    axios.get(url).then(data => setCart(data.data)).catch(err => console.log(err))
  }, []); */

export const shoppingInitialState = {
    products : cartItems,
    cart: [],
};

export function shoppingReducer(state, action) {



    switch (action.type) {
        case TYPES.ADD_TO_CART: {
            let newItem = state.products.find(
                (product) => product.id === action.payload
            );
            //console.log(newItem);

            let itemInCart = state.cart.find((item) => item.id === newItem.id);

            return itemInCart
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === newItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: [...state.cart, { ...newItem, quantity: 1 }],
                };
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            let itemToDelete = state.cart.find((item) => item.id === action.payload);

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map((item) =>
                        item.id === action.payload
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    ),
                }
                : {
                    ...state,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.CLEAR_CART:
            return shoppingInitialState;
        default:
            return state;
    }
}