import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginUser } from "./Pages/LoginUser";
import { ReportFormUser } from "./Pages/ReportFormUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/report" element={<ReportFormUser />} />
      </Routes>
    </Router>
  );
}

export default App;
