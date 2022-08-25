import React, { useReducer } from 'react';
// import Form from './components/Form';
// eslint-disable-next-line import/no-cycle
import ComponentA from './components/ComponentA';

export const counterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

export default function App() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="app">
            {/* <Form /> */}
            <counterContext.Provider value={{ countDispatch: dispatch, count }}>
                <ComponentA />
            </counterContext.Provider>
        </div>
    );
}
