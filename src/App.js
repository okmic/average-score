import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import useInput from './hooks/useInput';

function App() {

  const fhree = useInput(0)
  const four = useInput(0)
  const five = useInput(0)

  const [count, setCount] = useState(0)

  const [nums, setNums] = useState([])

  const hundleSubmit = () => {
    setNums([
      Number(fhree.value),
      Number(four.value),
      Number(five.value)
    ])
  }

  useEffect(() => {

    const x = (3 * nums[0]) + (4 * nums[1]) + (5 * nums[2])
    const y = (nums[0] + nums[1] + nums[2])

    if(!y || !x) return

    setCount(x / y)
  }, [fhree, four, five, nums])




  return (
    <div className="App">
      <header className="App-header">
        <span>колличество 3</span>
        <input type="number" {...fhree} id='3' />
        <br />
        <span>колличество 4</span>
        <input type="number" {...four} id='4' />
        <br />
        <span>колличество 5</span>
        <input type="number" {...five} id='5' />
        <br />
        <button onClick={hundleSubmit}>Расчитать</button>
        <br />
        <div>
          <h3>Результат: </h3>
          <h1>{count && count}</h1>
        </div>

      </header>
    </div>
  )
}

export default App
