import React from 'react';
import { Link } from '@reach/router';
import styles from './Header.css';
import logo from '../../static/crab.png';

const Header = () => (
  <Link to="/">
    <div className={styles.header}>
      <img src={logo} alt="ReactMD Crab Logo" className={styles.logo} />
      Reach Router
    </div>
  </Link>
);

export default Header;
