import React, { useState } from 'react';

export default function counter() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [count, setCount] = useState(0);
    const addFive = () => {
        let i = 0;
        while (i < 5) {
            // setCount(count + 1);
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };
    return (
        <div>
            <p>{count}</p>
            <p>
                <button type="button" onClick={() => setCount((prevState) => prevState + 1)}>
                    Add 1
                </button>
            </p>
            <p>
                <button type="button" onClick={addFive}>
                    Add 5
                </button>
            </p>
        </div>
    );
}
