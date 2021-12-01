import { TYPES } from "../actions/shoppingActions";
import cartItems from '../data'
//import useEffect from 'react'
const url = 'https://course-api.com/react-useReducer-cart-project'
/*useEffect(() => {
   axios.get(url).then(data => setCart(data.data)).catch(err => console.log(err))
 }, []); */

fetch(url)
    .then(response => response.json())
    .then(cartItems => console.log(cartItems));
const cartItemss = cartItems;


export const shoppingInitialState = {
    products: cartItemss,
    cart: [],
    totalCart: 0,
    totAmount: 0,
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
                    totAmount: state.totAmount + 3,
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
                totalCart: 0,
                totAmount: 0,
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.ADD_TOT_CART: {

            return {
                ...state,
                totalCart: state.totalCart + 1,

            }

        }
        case TYPES.REMOVE_TOT_CART: {

            return {
                ...state,
                totalCart: state.totalCart - 1,
            }

        }
        case TYPES.CLEAR_CART: {
            return shoppingInitialState;
        }


        //** */
        default:
            return state;
    }
}