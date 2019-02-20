import React from 'react';
import { Link } from '@reach/router';
// import { Select, Button } from 'antd';
import styles from './Content.css';

// const { Option } = Select;
const count = 5;

const Content = () => (
  <div className={styles.body}>
    <Link to="/intro">Intro</Link>
    <Link to="/reactMD-logo">Logo</Link>
    <Link to="/counter">Counter</Link>
    <Link to={`/preset-counter?startValue=${count}`}>Preset Counter</Link>
    <div className={styles.about}>
      <Link to="/about">About Me</Link>
    </div>
  </div>
);

export default Content;
