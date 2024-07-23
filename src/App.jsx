import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Vacancy from "./components/Vacancy"
import CandidateList from "./components/CandidateList"
import Navbar from "./components/Navbar"
import CandidateForm from "./components/CandidateForm"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/" element={<Navbar />} >
            <Route path="/home" element={<Home />} />
            <Route path="/add-vacancy" element={<Vacancy />} />
            <Route path="/add-candidate" element={<CandidateForm />} />
            <Route path="/view-candidates" element={<CandidateList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App