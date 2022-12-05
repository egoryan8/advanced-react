import React, {useState} from 'react';
import styles from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className={styles.wrapper}>
      <h1>{count}</h1>
      <button className={styles.green} onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

