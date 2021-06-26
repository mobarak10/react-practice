/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Button extends React.Component {
    shouldComponentUpdate(nextprops) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextprops;

        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        console.log('Button component render');
        const { change, locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>
                Click Here
            </button>
        );
    }
}

export default Button;
