/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span>{new Date().toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

export default Clock;
