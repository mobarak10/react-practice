import React, { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { counterContext } from '../AppOld';

export default function ComponentB() {
    const countContext = useContext(counterContext);
    return (
        <div>
            <p>Count: {countContext.count}</p>
            <p>Component A</p>
            <button type="button" onClick={() => countContext.countDispatch('increment')}>
                Increment
            </button>
            <button type="button" onClick={() => countContext.countDispatch('decrement')}>
                Decrement
            </button>
        </div>
    );
}
