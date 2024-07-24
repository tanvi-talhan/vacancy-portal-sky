import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Vacancy from "./components/Vacancy"
import CandidateList from "./components/CandidateList"
import Navbar from "./components/Navbar"
import CandidateForm from "./components/CandidateForm"
import Register from "./components/Register"
import Logout from "./components/Logout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navbar />} >
            <Route path="/home" element={<Home />} />
            <Route path="/add-vacancy" element={<Vacancy />} />
            <Route path="/add-candidate" element={<CandidateForm />} />
            <Route path="/view-candidates" element={<CandidateList />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App