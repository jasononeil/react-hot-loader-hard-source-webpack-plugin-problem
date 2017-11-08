import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function render() {
    ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
}

render();
if (module.hot) {
    module.hot.accept('./App', () => render());
}

registerServiceWorker();
