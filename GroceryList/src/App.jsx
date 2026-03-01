import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Grocery from './Grocery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Grocery List</h1>
      <div className="card">
        <Grocery></Grocery>
      </div>
    </>
  )
}

export default App
