import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WorkingTestPage from './pages/workingtestpage'
import BrokenTestPage from './pages/brokentestpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrokenTestPage />
    </>
  )
}

export default App
