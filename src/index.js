import React from 'react';
import ReactDOM from 'react-dom';
//you can import some css file too
import App from './App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));//renders whatever App.js has
//this index.js is a requiremnt for every react app
//we can either render our views within it or a different js file
//serviceWorker.unregister();
