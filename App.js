import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0)
  async function handleAdvice() {
    let res = await fetch("https://api.adviceslip.com/advice")
    let data = await res.json();
    setAdvice(data.slip.advice)
    setCount(count+1)

  }
  return(
    <div>
      <h1>{advice}</h1>
      <button onClick={handleAdvice}>advice</button>
      <p>{count}</p>
    </div>
  )
}
export default App;