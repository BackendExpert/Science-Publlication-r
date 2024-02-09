import { BrowserRouter, Route, Routes } from "react-router-dom"
import SciPub from "./sciPub/sciPub"

export default function App() {
  return (
    // <SciPub />

    <BrowserRouter>
      <Routes>
        <Route path="/sciPub" element={ <SciPub />}></Route>
      </Routes>
    </BrowserRouter>

  )
}