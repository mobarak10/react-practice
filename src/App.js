import React from 'react';
// import Todo from './components/Todo';
import Counter from './components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                {/* <Todo /> */}
                <Counter />
            </div>
        );
    }
}
