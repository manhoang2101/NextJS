import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '@/redux/store';
import { decrement, increment } from '@/redux/slices/homeSlice';
import Button from '@/components/button/Button';

const HomePage: React.FC = () => {
  const value = useSelector((state: RootState) => state.home.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>

      <h1>{value}</h1>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
};

export default HomePage;
