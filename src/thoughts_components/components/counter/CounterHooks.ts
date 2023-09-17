import {useState} from 'react';

function CounterHooks() {
  const [count, setCount] = useState(1);

  function updateCount(option: string) {
    if (option === 'sum') {
      setCount(count + 1);
    } else {
      if (count - 1 > 0) {
        setCount(count - 1);
      }
    }
  }

  return {count, updateCount};
}

export default CounterHooks;
