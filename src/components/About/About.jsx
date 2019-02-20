import React from 'react';
import { Link } from '@reach/router';
import styles from './About.css';

const About = () => (
  <div className={styles.main}>
    <Link to="/">Back to Home</Link>
    <div className={styles.display}>
      <div>Name:</div>
      <div>Jordan Leeper</div>
    </div>
    <div className={styles.display}>
      <div>Twitter:</div>
      <div>
        <a href="https://twitter.com/guard_let_var" target="_blank" rel="noopener noreferrer">
          @guard_let_var
        </a>
      </div>
    </div>
    <div className={styles.display}>
      <div>GitHub:</div>
      <div>
        <a href="https://github.com/jmleep" target="_blank" rel="noopener noreferrer">
          jmleep
        </a>
      </div>
    </div>
  </div>
);

export default About;
