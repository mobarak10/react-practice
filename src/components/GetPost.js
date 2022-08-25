import React, { useEffect, useState } from 'react';

export default function GetPost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                setError('');
                setPost(data);
            })
            .catch((err) => {
                setLoading(false);
                setError('there was a problem!');
                setPost({});
                console.log(err);
            });
    });
    return (
        <div>
            {loading ? 'Loading...' : post.title}
            {error || null}
        </div>
    );
}
