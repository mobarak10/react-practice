import React from 'react';
import themeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

export default class Content extends React.Component {
    componentDidMount() {
        console.log(this.context);
    }

    render() {
        const { theme, switchTheme } = this.context;
        return (
            <div>
                <h1>this is content</h1>
                <Counter>
                    {(count, incrementCount) => (
                        <HoverCounter
                            count={count}
                            incrementCount={incrementCount}
                            theme={theme}
                            switchTheme={switchTheme}
                        />
                    )}
                </Counter>
            </div>
        );
    }
}

Content.contextType = themeContext;
