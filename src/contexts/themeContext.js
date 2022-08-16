/**
 * // my own context
 */
// import createContext from '../lib/Context';

// const themeContext = createContext({
//     theme: 'light',
// });

// export default themeContext;

import React from 'react';

const themeContext = React.createContext({
    theme: 'light',
});

export default themeContext;
