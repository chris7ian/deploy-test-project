import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const appName = import.meta.env.VITE_APP_NAME ?? 'Deploy Test'
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'not set'
const buildTime = import.meta.env.VITE_BUILD_TIME ?? 'local dev'

function Home() {
  const [count, setCount] = useState(0)
  return (
    <>
      <p>If you can see this page, the deployment worked.</p>
      <button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</button>
    </>
  )
}

function About() {
  return <p>Internal route. Refresh this page: it should still load, not 404.</p>
}

function NotFound() {
  return <p>Page not found (handled by React Router).</p>
}

function App() {
  return (
    <main className="app">
      <h1>{appName} 🚀</h1>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <p className="meta">
        Build: {buildTime}
        <br />
        API: {apiBaseUrl}
      </p>
    </main>
  )
}

export default App
