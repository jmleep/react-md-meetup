import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import styles from './App.css';

document.body.style.margin = 0;

const App = () => (
  <div className={styles.app}>
    <Header />
    <Content />
  </div>
);

export default App;
