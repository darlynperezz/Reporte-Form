import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { ReportForm } from "./pages/ReportForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/report" element={<ReportForm />} />
      </Routes>
    </Router>
  );
}

export default App;
