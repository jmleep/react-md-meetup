/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { Link } from '@reach/router';
import { Button } from 'antd';
import styles from './PresetCounterView.css';

const PresetCounterView = props => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const { startValue } = queryString.parse(props.location.search);
    setCounter(Number(startValue));
  }, []);

  return (
    <div className={styles.counter}>
      <Link to="/">Back to Home</Link>
      <div className={styles.display}>
        <div>{counter}</div>

        <Button type="primary" onClick={() => setCounter(counter + 1)}>
          Add 1
        </Button>
      </div>
    </div>
  );
};

export default PresetCounterView;
