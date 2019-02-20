import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from '@reach/router';
import styles from './CounterView.css';

const CounterView = () => {
  const [counter, setCounter] = useState(0);

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

export default CounterView;
