import React from 'react';

/*
        ReactDOM is a package that provides DOM specific methods to effeciently 
        manage DOM elements.

*/
import ReactDOM from 'react-dom';

//Import the main app component
import App from './App';


// We are rendering the main app compnent to the root element. In the html file.
ReactDOM.render(<App />, document.getElementById('root'));

