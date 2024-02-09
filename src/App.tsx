import { BrowserRouter, Route, Routes } from "react-router-dom"
import SciPub from "./sciPub/sciPub"
import ViewMore from "./sciPub/viewMore"

export default function App() {
  return (
    // <SciPub />

    <BrowserRouter>
      <Routes>
        <Route path="/sciPub" element={ <SciPub />}></Route>
        <Route path="/sciPub/viewMore" element={<ViewMore />}></Route>
      </Routes>
    </BrowserRouter>

  )
}