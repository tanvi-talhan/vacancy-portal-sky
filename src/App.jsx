import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Vacancy from "./components/Vacancy"
import CandidateList from "./components/CandidateList"
import Navbar from "./components/Navbar"
import Register from "./components/Register"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navbar />} >
            <Route path="/home" element={<Home />} />
            <Route path="/add-vacancy" element={<Vacancy />} />
            <Route path="/view-candidates" element={<CandidateList />} />
            {/* <Route path="/add-candidate" element={<} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App