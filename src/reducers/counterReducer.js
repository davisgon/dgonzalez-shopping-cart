import { TYPES } from "../actions/counterAction";

export const counterInitialState = { counter: 0 };

export const CounterInit = (initialState) => {
    return {
        counter: initialState.counter + 100
    }
}


export function counterReducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { counter: state.counter + action.payload }
        case TYPES.DECREMENT:
            return { counter: state.counter - action.payload }
        case TYPES.RESET:
            return counterInitialState;
        default:
            return state;
    }
}