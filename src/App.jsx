<<<<<<< HEAD
import { useState } from 'react'
import NavBar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
=======
import { CandidateList } from "./components/CandidateList";
import Login from "./components/Login";
>>>>>>> 3ecabf564ed1fd7feea1741a39c92d8ea624d3df

export default function App() {
  return (
<<<<<<< HEAD
    <>
    <NavBar/>
    </>
=======
   <>
   <CandidateList/>
   <Login/>
   </>
>>>>>>> 3ecabf564ed1fd7feea1741a39c92d8ea624d3df
  )
}