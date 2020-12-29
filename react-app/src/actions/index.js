export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};
