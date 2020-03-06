import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { MatrixStore } from './components/MatrixContext'

ReactDOM.render(<MatrixStore><App /></MatrixStore>, document.getElementById('root'))