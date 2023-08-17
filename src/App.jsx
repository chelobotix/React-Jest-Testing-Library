import {useState} from 'react'

function App() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>Works!</h1>
            <h2>React Jest Test</h2>
            <h3 data-testid="h3_Id">Test by data-testid</h3>
            <p>{counter}</p>
            <button type="button" onClick={() => setCounter(counter + 1)}>Increment</button>
        </>
    )
}

export default App
