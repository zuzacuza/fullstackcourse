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

const Statistics = ({good, neutral, bad, total, sum, positive}) => {
  if (total === 0){
    return <div>No feedback given</div>
  } else {
    return(
      <table>
      <tbody>
      <StatsLine text="good" value={good} />
      <StatsLine text="neutral" value={neutral} />
      <StatsLine text="bad" value={bad} />
      <StatsLine text="total" value={total} />
      <StatsLine text="average" value={sum / total} />
      <StatsLine text="positive" value={(positive / total) * 100 + "%"} />
      </tbody>
     </table>
    )
  }
}

const StatsLine = ({text, value}) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
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
      <SubHeader text='StatsLine'/>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        sum={sum}
        positive={positive}/>
    </div>
  )
}

export default App