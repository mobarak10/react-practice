import React from 'react';
import reactDom from 'react-dom';

function Clock({ local }) {
    return (
        <h1 className="heading">
            <span className="text">Hello {new Date().toLocaleTimeString(local)}</span>
        </h1>
    );
}

reactDom.render(<Clock local="bn-BD" />, document.getElementById('root'));
