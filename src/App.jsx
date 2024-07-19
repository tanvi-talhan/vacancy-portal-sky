import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}>
            <Route path="/" element />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App