import React from 'react';
import styles from './Header.css';
import logo from '../../static/crab.png'

const Header = () => (
  <div>
    <div className={styles.header}>
    <img src={logo} className={styles.logo}/>
      ReactMD Demo
    </div>
  </div>
);

export default Header;
