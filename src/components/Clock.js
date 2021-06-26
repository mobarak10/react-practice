/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

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
        console.log('clock component render');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale="en-US" />
            </div>
        );
    }
}

export default Clock;
