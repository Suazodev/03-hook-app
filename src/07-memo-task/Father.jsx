import { Son } from './Son';
import { useCallback, useState } from 'react';

export const Father = () => {
  const numbers = [2, 4, 6, 8, 10];
  const [value, setValue] = useState(0);

  const incrementFather = useCallback((value) => {
    setValue((previousValue) => previousValue + value);
  }, []);

  return (
    <div>
      <h1>Father</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Son key={n} number={n} increment={incrementFather} />
      ))}
      {/* <Son /> */}
    </div>
  );
};
