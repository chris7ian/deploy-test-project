import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buildTime = import.meta.env.VITE_BUILD_TIME ?? 'local dev'

  return (
    <main className="app">
      <h1>Netlify Deploy Test 🚀</h1>
      <p>If you can see this page, the deployment worked.</p>
      <button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</button>
      <p className="meta">Build: {buildTime}</p>
    </main>
  )
}

export default App
