<<<<<<< HEAD
import Navbar from './Components/Navbar'
import Home from './Components/Home'
=======
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Vacancy from "./components/Vacancy"
import CandidateList from "./components/CandidateList"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import CandidateForm from "./components/CandidateForm"
>>>>>>> 3ec3c7da368c138532801b910d0d44ff9b362d0b

function App() {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <Home />
=======
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navbar />} >
            <Route path="/home" element={<Home />} />
            <Route path="/add-vacancy" element={<Vacancy />} />
            <Route path="/view-candidates" element={<CandidateList />} />
            <Route path="/add-candidate" element={<CandidateForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 3ec3c7da368c138532801b910d0d44ff9b362d0b
    </>
  )
}
export default App