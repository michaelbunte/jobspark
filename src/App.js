import EntryQuiz from "./Pages/EntryQuiz";
import Homepage from "./Pages/Homepage";
import PotentialMatches from "./Pages/PotentialMatches";
import About from "./Pages/About";
import EmploymentResources from "./Pages/EmploymentResources";
import Dashboard from "./Pages/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/">
        <Route path="questionaire" element={<EntryQuiz />} />
        <Route index element={<Homepage />} />
        <Route path="potentialmatches" element={<PotentialMatches />} />
        <Route path="about" element={<About />} />
        <Route path="employmentresources" element={<EmploymentResources />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;