import Login from "./components/Login";

import CandidateList from "./components/CandidateList";
import { BrowserRouter, Routes } from "react-router-dom";


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element=''>

          </Route>
        </Routes>
      </BrowserRouter >
      {/* <CandidateList /> */}
      < Login />
    </>
  )
}