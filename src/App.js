import React, { useState } from 'react';
import MyComponent from './components/MyComponent';

export default function App() {
    const [show, setShow] = useState(true);
    return (
        <div className="app">
            <div>{show && <MyComponent />}</div>
            <p>
                <button type="button" onClick={() => setShow((prevState) => !prevState)}>
                    {show ? 'Hide Post' : 'Show Post'}
                </button>
            </p>
        </div>
    );
}
