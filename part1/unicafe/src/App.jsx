import { useState } from 'react'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
)

const Header = ({text}) => (
  <div>
    <h1>{text}</h1>
  </div>
)

const SubHeader = ({text}) => (
  <div>
    <h2>{text}</h2>
  </div>
)

const Stats = ({text, count}) => (
  <div>
    {text} {count}
  </div>
)
  
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setTotal(total+1)
    setPositive(positive+1)
    setSum(sum+1)
  }
  const handleNeutral = () => { 
    setNeutral(neutral+1)
    setTotal(total+1)
  }
  const handleBad = () => {
     setBad(bad+1)
     setTotal(total+1)
     setSum(sum-1)
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>
      <Button onClick={handleBad} text='bad'/>
      <SubHeader text='statistics'/>
      <Stats text ='good' count={good}/>
      <Stats text ='neutral' count={neutral}/>
      <Stats text ='bad' count={bad}/>
      <Stats text ='total' count={total}/>
      <Stats text='average' count={total === 0 ? 0: sum/total}/>
      <Stats text ='positive' count={(total === 0 ? 0 : (positive / total) * 100) + '%'}/>
    </div>
  )
}

export default App