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
            // find product whith id = action.payload
            let newItemCart = state.products.find((product) => product.id === action.payload);
            console.log(" TYPES.ADD_TO_CART: ***********");
            console.log(newItemCart.price);

            let itemInCart = state.cart.find((item) => item.id === newItemCart.id);
            console.log(itemInCart);
            return itemInCart
                ? {
                    ...state,
                    totalCart: state.totalCart + 1,
                    totAmount: state.totAmount + newItemCart.price,
                    cart: state.cart.map((item) =>
                        item.id === newItemCart.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item

                    ),
                }
                : {
                    ...state,
                    totalCart: state.totalCart + 1,
                    totAmount: state.totAmount + newItemCart.price,
                    cart: [...state.cart, { ...newItemCart, quantity: 1 }],
                };
        }
        case TYPES.REMOVE_ONE_FROM_CART: {
            console.log("REMOVE_ONE_FROM_CART");
            let itemToDelete = state.cart.find((item) => item.id === action.payload);
            console.log(itemToDelete);
            return itemToDelete.quantity > 1 ? {
                ...state,
                totAmount: state.totAmount - itemToDelete.price,
                cart: state.cart.map((item) =>
                    item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
                ),
            }
                : {
                    ...state,
                    totAmount: state.totAmount - itemToDelete.price,
                    cart: state.cart.filter((item) => item.id !== action.payload),
                };
        }
        case TYPES.REMOVE_ALL_FROM_CART: {
            console.log("REMOVE_ALL_FROM_CART");
            let itemRemove = state.cart.filter((item) => item.id == action.payload);

            return {
                ...state,
                totalCart: state.totalCart - itemRemove[0].quantity,
                totAmount: state.totAmount - (itemRemove[0].quantity * itemRemove[0].price),
                cart: state.cart.filter((item) => item.id !== action.payload),
            };
        }
        case TYPES.ADD_TOT_CART: {
            let itemRemove = state.cart.filter((item) => item.id == action.payload);
            console.log(itemRemove[0].quantity);
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
        default:
            return state;
    }
}