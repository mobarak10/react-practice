/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Clock extends React.Component {
    state = {
        date: new Date(),
        locale: 'bn-BD',
    };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        if (this.state.locale === 'bn-BD') {
            this.setState({
                locale,
            });
        } else {
            this.setState({
                locale: 'bn-BD',
            });
        }
    };

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h1 className="heading">
                    <span>{this.state.date.toLocaleTimeString(this.state.locale)}</span>
                </h1>
                <button type="button" onClick={() => this.handleClick('en-US')}>
                    Click Here
                </button>
            </div>
        );
    }
}

export default Clock;
