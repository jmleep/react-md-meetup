import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import styles from './styles/global.css';

ReactDOM.render(<App styles={styles.app} />, document.getElementById('root'));
