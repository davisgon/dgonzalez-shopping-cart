import { useReducer, useState } from "react";

const initialState = { counter: 0 };

const init = (initialState) => {
    return {
        counter: initialState.counter + 100
    }
}

const TYPES = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
    RESET: "RESET"
}

function reducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { counter: state.counter + action.payload }
        case TYPES.DECREMENT:
            return { counter: state.counter - action.payload }
        case TYPES.RESET:
            return { counter: action.payload }
        default:
            return state;
    }
}

const Total = () => {
    // let [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState, init)

    // const add = () => setCounter(state.counter + 1);
    //const add = () => dispatch({ type: "INCREMENT" });
    const add = () => dispatch({ type: TYPES.INCREMENT, payload: 1 });
    //const substract = () => setCounter(state.counter - 1);
    //const substract = () => dispatch({ type: "DECREMENT" });
    const substract = () => dispatch({ type: TYPES.DECREMENT, payload: 1 });

    //const reset = () => dispatch({ type: "RESET" });
    const reset = () => dispatch({ type: TYPES.RESET, payload: 0 });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Total Reducer</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={reset}>0 </button>
                <button onClick={substract}>-</button>


            </nav>
            <h3>{state.counter}</h3>
        </div>
    );
};

export default Total