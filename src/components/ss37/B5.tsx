import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    default:
      return state;
  }
};

// Tạo component Increase
const Increase = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increase
      </button>
    </div>
  );
};

export default Increase;
