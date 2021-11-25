import { useReducer } from "react";
import { TYPES } from "../actions/counterAction";
import { CounterInit, counterInitialState, counterReducer } from "../reducers/counterReducer";

const TotalFinal = () => {
    const [state, dispatch] = useReducer(counterReducer, counterInitialState, CounterInit)
    const add = () => dispatch({ type: TYPES.INCREMENT, payload: 1 });
    const substract = () => dispatch({ type: TYPES.DECREMENT, payload: 1 });
    const reset = () => dispatch({ type: TYPES.RESET, payload: 0 });

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Total Reducer Final</h2>
            <nav>
                <button onClick={add}>+</button>
                <button onClick={reset}>0 </button>
                <button onClick={substract}>-</button>

            </nav>
            <h3>{state.counter}</h3>
        </div>
    );
};

export default TotalFinal