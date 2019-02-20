/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from '@reach/router';
import styles from './Intro.css';

const Intro = () => (
  <div className={styles.main}>
    <Link to="/">Back to Home</Link>
    <div className={styles.display}>
      <div>Reach Router - What is it?</div>
      <p>A way to navigate through pages in your React app!</p>
      <ul>
        <li>General navigation</li>
        <li>URL Parameters</li>
        <li>Query Parameters</li>
      </ul>
    </div>
  </div>
);

export default Intro;
