import React from 'react';
import ThemeContext from './ThemeContext';
import Button from './Button';

const App = () => {
  return (
    <div>
      <ThemeContext.Provider value="blue">
        <p>Giá trị khởi tạo là blue:</p>
        <Button />
      </ThemeContext.Provider>

      <ThemeContext.Provider value="red">
        <p>Giá trị khởi tạo là red:</p>
        <Button />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
