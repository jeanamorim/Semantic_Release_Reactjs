import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite +ddd Redddact</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} teste d na pratica do semantic release
        </button>
        <p>
          Edit <code>src/App.tsx</code>ande & and and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
       Teste on add chore to commit
      </p>
    </>
  )
}

export default App
