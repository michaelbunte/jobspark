import EntryQuiz from "./Pages/EntryQuiz";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes> 
      <Route path="/">
        <Route path="questionaire" element={<EntryQuiz/>} />
        <Route index element={<Homepage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;