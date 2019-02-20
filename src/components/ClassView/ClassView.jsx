/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from '@reach/router';
import styles from './ClassView.css';
import determineImage from './determineImage';

const ClassView = ({ name }) => {
  const classImage = determineImage(name);

  return (
    <div className={styles.class}>
      <Link to="/">Back to Home</Link>
      <div className={styles.display}>
        <div>Class</div>
        <p>{name.replace(name[0], name[0].toUpperCase())}</p>
        <img src={classImage} alt={name} />
      </div>
    </div>
  );
};

export default ClassView;
