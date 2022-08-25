import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.data,
            };
        case 'ERROR':
            return {
                loading: false,
                error: 'Something Wrong!',
                post: {},
            };

        default:
            return state;
    }
};

export default function Getpost2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'SUCCESS', data });
            })
            .catch(() => {
                dispatch({ type: 'ERROR' });
            });
    });
    return (
        <div>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error || null}
        </div>
    );
}
