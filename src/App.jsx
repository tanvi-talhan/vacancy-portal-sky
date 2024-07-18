import { useState } from 'react'
import NavBar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    </>
  )
}

export default App
