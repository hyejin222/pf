import React from 'react';
import ReactDOM from 'react-dom';
import 'sass/global.scss';
import App from 'js/App';
import * as serviceWorker from 'js/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
