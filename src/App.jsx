import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginUser } from "./Pages/LoginUser";
import { ReportForm } from "./pages/ReportForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/report" element={<ReportForm />} />
      </Routes>
    </Router>
  );
}

export default App;
