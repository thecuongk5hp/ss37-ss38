import React from 'react'
import B1 from './components/ss37/B1'
import B3 from './components/ss37/B3'
import B4 from './components/ss37/B4'
import B5 from './components/ss37/B5'
import B7 from './components/ss37/B7'
import BB1 from './components/ss37/BB1'
import BB2 from './components/ss37/BB2'
import BB3 from './components/ss37/BB3'
import BB4 from './components/ss37/BB4'
import BB5 from './components/ss37/BB5'
import BB6 from './components/ss37/BB6'
import Button from './components/ss37/Button'
import ThemeContext from './components/ss37/ThemeContext'
export default function App() {
  return (
    <div>App
      <B1></B1>
      <B2></B2>
      <B3></B3>
      <B4></B4>
      <B5></B5>
      <B7></B7>
      <BB1></BB1>
      <BB2></BB2>
      <BB3></BB3>
      <BB4></BB4>
      <BB5></BB5>
      <BB6></BB6>
      <Button></Button>
      <ThemeContext.Provider value="blue">
        <p>Giá trị khởi tạo là blue:</p>
        <Button />
      </ThemeContext.Provider>

      <ThemeContext.Provider value="red">
        <p>Giá trị khởi tạo là red:</p>
        <Button />
      </ThemeContext.Provider>
    </div>
  )
}
