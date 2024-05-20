import EntryQuiz from "./Pages/EntryQuiz";
import Homepage from "./Pages/Homepage";
import PotentialMatches from "./Pages/PotentialMatches";
import About from "./Pages/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/">
        <Route path="questionaire" element={<EntryQuiz />} />
        <Route index element={<Homepage />} />
        <Route path="potentialmatches" element={<PotentialMatches />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;